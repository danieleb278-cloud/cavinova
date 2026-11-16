// Frame the supplied artwork without baking its small labels into the webpage.
export function Artwork({
  src,
  height,
  frame,
  alt,
}: {
  src: string;
  height: number;
  frame: [number, number, number, number];
  alt: string;
}) {
  const [x, y, width, visibleHeight] = frame;
  return (
    <div className="relative overflow-hidden bg-card" style={{ aspectRatio: width / visibleHeight }}>
      <img
        src={src}
        width={1536}
        height={height}
        alt={alt}
        loading="lazy"
        className="absolute h-auto max-w-none"
        style={{
          width: `${153600 / width}%`,
          left: `${(-100 * x) / width}%`,
          top: `${(-100 * y) / visibleHeight}%`,
        }}
      />
    </div>
  );
}
