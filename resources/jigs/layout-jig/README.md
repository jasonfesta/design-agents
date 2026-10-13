# Shared layout jig

A small review UI over each Dial layout. Jason's latest direction on October 13, 2026 is **full-screen layout with an empty dot centered along the bottom**. The visible dot is 12 px inside a 36 px interaction target; it has no icon, border, or label. Hover, keyboard focus, or tapping reveals a centered horizontal overlay above it. The dot has a 50% transparent fill that adapts to light/dark appearance. The menu uses plain 50% black in both modes, with readable light text and no stroke, rounded container, shadow, blur, or decorative dividers. Light/dark still controls the layout appearance. This supersedes the earlier framed, corner-clip, and icon-bearing circular treatments preserved in History.

The menu shows the model that produced the layout and its light/dark appearance, then offers **Annotate**, **Download React**, and **Copy URL**. Width and height selectors were removed from the menu. The layout remains responsible for its dimensions, content, typography, and responsive behavior. The jig never injects its UI or font into the React download.

Google Sans Flex applies to all jig controls, comment panels, and the separate Benchmark interface. It does not replace fonts chosen for an individual design through Taste and Dial. The unmodified local font files and their OFL/trademark notices are in `font/` for offline use; provenance and hashes are in `font/source.json`.

## Component

Use [Jig.jsx](Jig.jsx) with [jig.css](jig.css) and the adjacent font folder in a React project. Pass the layout as its child. For unrelated/generated layouts, prefer an isolated iframe so UI styles cannot leak into the layout.

```jsx
<Jig
  title="Dashboard"
  model={savedModelName}
  viewport={{ width, height }}
  theme={theme}
  onTheme={setTheme}
  url={layoutUrl}
  onDownload={downloadLayoutReact}
  annotations={savedPins}
  onAnnotation={savePinAndMarkdown}
>
  {layout}
</Jig>
```

`viewport` is the layout's real CSS-pixel dimensions, not a menu setting. Annotation coordinates refer to this stage, excluding the jig. Position indicators scale proportionally when viewing at another size; the original coordinates and viewport remain in the record. Responsive reflow can move the underlying element, so original dimensions should be restored for exact review. Element IDs/screenshot anchors are not implemented yet.

`onAnnotation` must persist the record before resolving. The caller owns loading, storage, and the saved path. The local example writes `tools/benchmark/notes/preview.json` and `preview.md`; Benchmark runs write their own `annotations.json` and `annotations.md`. Offline reports download Markdown because a standalone page cannot silently write arbitrary local files. Saved pins reopen for editing. Each comment includes position, viewport, model, appearance, timestamp, and requested change.

The React download must be the layout only, with its required dependencies documented. Copy URL copies the existing local URL; it does not publish it. Missing model provenance should be labeled unknown or hand-built, never guessed. Benchmark stays a separate agent, invoked after selecting a Dial layout; the everyday jig has no model comparisons.

## Local preview

Follow [Benchmark's run instructions](../../../tools/benchmark/README.md), then open [the jig preview](http://127.0.0.1:4317/?jig=1). This route hosts the reusable component on an animated **Paper Mesh Gradient** test background from our [shader source collection](../../history/workspace-sources/dxa/resources/shaders.md#backgrounds-and-procedural-motion). It is a test surface, not a Taste-approved style or an AI-generated layout. Paper's [official example](https://shaders.paper.design/mesh-gradient) documents the renderer; version 0.0.81 is pinned locally under Apache-2.0.

The menu uses a short CSS transform/opacity transition; keyboard opening is immediate and reduced motion disables the slide. The shader pauses when the tab is hidden or reduced motion is requested. The gradient fallback remains if WebGL is unavailable. Model, theme, and saved notes are project metadata; they must travel with the selected layout, not a global current-project pointer.
