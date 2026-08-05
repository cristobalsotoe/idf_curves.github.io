# CLAUDE.md

## Gotchas

- **Images must keep `height: auto` in `src/styles/global.css`.** The global `img` rule sets `max-width: 100%` but has no explicit `height`. Astro's markdown image optimization emits `width`/`height` HTML attributes matching the original image's pixel size; those attributes set the CSS `height` property via presentational hints unless author CSS overrides it. Without `height: auto`, any image narrower than its container's `max-width` (e.g. note figures inside `.prose`, capped at 760px) renders with the width scaled down but the height still pinned to the original size — a visible vertical stretch, most noticeable on narrow/mobile viewports. Keep `img { max-width: 100%; height: auto; }` intact; don't add a fixed `height` override for any image without also setting a matching `width` (or `aspect-ratio`).
