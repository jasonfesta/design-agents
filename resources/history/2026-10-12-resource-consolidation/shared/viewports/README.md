# Viewport registry

Viewport menus are shared references. Create physical viewport folders only when an actual task needs one; earlier placeholders are preserved in [History](../../resources/history/README.md).

Layer 2 · Source review October 12, 2026

The folder pattern is **type/viewport/category/style**. A viewport folder groups a kind of viewing surface; exact device sizes and orientation are recorded as profiles within it. Category names do not determine technical device support. Verify the actual product, runtime, input method, and window before marking a combination supported.

## Initial folder menu

This is our library organization, not a claim that Google Play guarantees every combination.

| Viewport | apps | websites | games | Reference |
| --- | --- | --- | --- | --- |
| mobile | Included | Included | Included | [Chrome phones](CHROME.md); native target for native apps/games |
| tablet | Included | Included | Included | [Chrome tablets](CHROME.md); native window size for native apps/games |
| desktop | Included | Included | Included | [Chrome responsive widths](CHROME.md); actual resizable application/game window |
| tv | Included for TV targets | Add for an explicit TV browser target | Included for TV/console targets | [Native and rendering references](NATIVE.md) |
| watch | Included for watch targets | Add only for a verified browser target | Add only for a verified watch-game target | [Wear OS preview references](NATIVE.md) |

Tablet is a separate viewport folder in this revision so Chrome's tablet references are easy to collect. Earlier mobile/tablet records retain their original scope and need deliberate mapping. Folded/unfolded, portrait/landscape, and window sizes are profiles, not additional taxonomy levels. Console is a platform detail; the viewport may be TV, desktop, or a handheld target.

## Record a profile

```md
- Profile ID and viewport folder:
- Design type, category, and actual target:
- Platform/runtime/browser version:
- Width × height, units, orientation, and measured area:
- DPR or render scale, safe areas, and browser/system chrome:
- Input: touch / pointer / keyboard / controller / remote / other
- Source preset or target specification; checked date:
- Support: candidate / declared by target / verified / not applicable
- Verification evidence and limitations:
```

Use CSS pixels for a web layout viewport, dp for an Android layout, points for an Apple layout, and explicitly named render pixels for a game target. Record the conversion when applicable; never treat these units as interchangeable. Capture dimensions and full-screen resolution alone do not establish the usable layout area.

Start from [Chrome presets](CHROME.md) for browser work and [native references](NATIVE.md) for native targets. The sizes guide testing and reproduction; responsive layouts still need intermediate widths and content-driven breakpoints. Evidence from one viewport does not define Jason's taste on another.
