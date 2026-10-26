import { useRef, useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, Maximize, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ImageLightbox({ src, title }: { src: string; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" className="relative block h-auto w-full cursor-zoom-in rounded-none p-0 hover:bg-transparent" aria-label={`Enlarge ${title}`}>
          <img src={src} alt={title} className="block w-full" loading="lazy" />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md border bg-card/95 px-2.5 py-1.5 text-xs text-card-foreground shadow-soft">
            <ZoomIn aria-hidden="true" />Click to enlarge
          </span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-lightbox-backdrop" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-50 flex flex-col outline-none">
          <Dialog.Title className="sr-only">{title} — enlarged image</Dialog.Title>
          <LightboxViewer src={src} title={title} onClose={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function LightboxViewer({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  const transform = useRef<ReactZoomPanPinchRef>(null);
  const stage = useRef<HTMLDivElement>(null);
  const gestureMoved = useRef(false);
  const [natural, setNatural] = useState({ width: 0, height: 0 });
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setBounds({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fit = natural.width && natural.height && bounds.width && bounds.height
    ? Math.min((bounds.width - 32) / natural.width, (bounds.height - 32) / natural.height, 1)
    : 0;

  useEffect(() => {
    if (!fit) return;
    const frame = requestAnimationFrame(() => transform.current?.centerView(1, 0));
    return () => cancelAnimationFrame(frame);
  }, [fit, bounds.width, bounds.height]);

  return (
    <>
      <div className="relative flex shrink-0 items-center justify-center gap-2 px-4 py-3 pr-16">
        <Button variant="outline" size="icon" title="Zoom out" aria-label="Zoom out" disabled={scale <= 1.001} onClick={() => transform.current?.zoomOut()}><ZoomOut /></Button>
        <output className="w-14 text-center text-sm tabular-nums text-lightbox-foreground" aria-label="Zoom level">{Math.round(scale * 100)}%</output>
        <Button variant="outline" size="icon" title="Zoom in" aria-label="Zoom in" disabled={scale >= 7.999} onClick={() => transform.current?.zoomIn()}><ZoomIn /></Button>
        <Button variant="outline" size="icon" title="Fit entire image" aria-label="Fit entire image" onClick={() => transform.current?.centerView(1)}><Maximize /></Button>
        <Dialog.Close asChild>
          <Button variant="outline" size="icon" className="absolute right-3 top-3" title="Close image" aria-label="Close image"><X /></Button>
        </Dialog.Close>
      </div>
      <div ref={stage} className="min-h-0 flex-1 overflow-hidden" onPointerDownCapture={() => { gestureMoved.current = false; }} onClick={(event) => {
        if (!gestureMoved.current && !(event.target instanceof HTMLImageElement)) onClose();
      }}>
        {failed ? <p className="p-8 text-center text-lightbox-foreground" role="alert">The image could not load. Please close and try again.</p> : (
          <TransformWrapper ref={transform} minScale={1} maxScale={8} centerOnInit wheel={{ step: 0.08 }} doubleClick={{ disabled: true }} panning={{ disabled: scale <= 1.001, velocityDisabled: true }} onPanning={() => { gestureMoved.current = true; }} onPinch={() => { gestureMoved.current = true; }} onTransformed={(_, state) => setScale(state.scale)}>
            <TransformComponent wrapperClass="lightbox-viewport" contentClass="lightbox-image-content">
              <img src={src} alt={title} draggable={false} onLoad={(event) => setNatural({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} onError={() => setFailed(true)} className="block max-w-none select-none" style={{ width: natural.width * fit, height: natural.height * fit, visibility: fit ? "visible" : "hidden", cursor: scale > 1.001 ? "grab" : "default" }} />
            </TransformComponent>
          </TransformWrapper>
        )}
      </div>
    </>
  );
}
