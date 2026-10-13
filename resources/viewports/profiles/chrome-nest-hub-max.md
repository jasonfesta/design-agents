# Nest Hub Max

- Profile ID: `chrome-nest-hub-max`
- Device-type hint: `desktop (smart-display browser target)`
- Chrome group: Smart displays; upstream type: `smart-display`
- Shown by default: true
- Device pixel ratio: 2
- Capabilities: touch, mobile
- Foldable: false; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | horizontal | 1280 × 800 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 52,
  "show-by-default": true,
  "title": "Nest Hub Max",
  "screen": {
    "horizontal": {
      "width": 1280,
      "height": 800
    },
    "device-pixel-ratio": 2,
    "vertical": {
      "width": 1280,
      "height": 800
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36 CrKey/1.54.250320",
  "type": "smart-display",
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
