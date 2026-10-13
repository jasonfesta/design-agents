# Laptop with HiDPI screen

- Profile ID: `chrome-laptop-with-hidpi-screen`
- Device-type hint: `desktop`
- Chrome group: Tablets and desktops; upstream type: `notebook`
- Shown by default: false
- Device pixel ratio: 2
- Capabilities: desktop pointer; no mobile/touch flags
- Foldable: false; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | horizontal | 1440 × 900 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "show-by-default": false,
  "title": "Laptop with HiDPI screen",
  "screen": {
    "horizontal": {
      "width": 1440,
      "height": 900
    },
    "device-pixel-ratio": 2,
    "vertical": {
      "width": 900,
      "height": 1440
    }
  },
  "capabilities": [],
  "user-agent": "",
  "type": "notebook",
  "modes": [
    {
      "title": "default",
      "orientation": "horizontal"
    }
  ]
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
