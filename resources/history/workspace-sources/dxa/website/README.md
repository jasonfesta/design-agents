# DxA Website

Full-screen Design xAgents typography experiment built with Vite, Three.js, `three-text`, and Instrument Sans.

The resource guide at `readme.html` uses Inter on white and renders the repository's Markdown directly. Its navigation includes the directory, events, workflows, and skill instructions.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Routes

- `index.html` is the primary shader typography page.
- `index-b.html` is the lighter cylinder typography page.
- `index-c.html` is the protocol cylinder typography page.
- `dxa.html` is the shader typography page with centered `DxA` text.
- `readme.html` is the plain Design xAgents resource guide. It also supports direct links such as `readme.html?doc=resources%2Fmcps.md#figma`.

## Structure

- `src/three-text-demo.js` contains the shared Three.js shader text scene for `index.html` and `dxa.html`.
- `src/three-text-demo.css` contains the shader page reset, Instrument Sans font face, and canvas sizing.
- `src/index-b.js` contains the cylinder scroll and drag behavior for `index-b.html`.
- `src/index-b.css` contains the cylinder page reset, typography, and layout.
- `public/fonts/InstrumentSans.ttf` and `public/hb/hb.wasm` are required runtime assets.
- `src/readme.js` renders the root README and related Markdown with Marked; `src/readme.css` provides the guide's typography. Inter is loaded from Google Fonts, with a system fallback.

## Deploy

Build output is written to `dist/`.
