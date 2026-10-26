<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules
- Product Concept image enlargement uses one reusable ImageLightbox with Radix focus management and react-zoom-pan-pinch gestures; thumbnails and original asset URLs stay unchanged to preserve layout and resolution.
- Development roadmap diagrams opt into a shared proportional preview while other diagrams retain their existing sizing; this keeps the three roadmap cards uniform without affecting other content.
- Before placing an uploaded brand mark, convert it to a transparent, tightly cropped CDN asset (remove the white background via a border-connected flood fill, then un-premultiply against white). Why: opaque white-background uploads show a rectangular seam against the site's tinted glass surfaces; keep the original upload pointer in `src/assets` for reference.
