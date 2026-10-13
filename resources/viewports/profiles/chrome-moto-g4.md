# Moto G4

- Profile ID: `chrome-moto-g4`
- Device-type hint: `mobile`
- Chrome group: Mobile; upstream type: `phone`
- Shown by default: false
- Device pixel ratio: 3
- Capabilities: touch, mobile
- Foldable: false; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 360 × 640 |
| default | horizontal | 640 × 360 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "show-by-default": false,
  "title": "Moto G4",
  "screen": {
    "horizontal": {
      "width": 640,
      "height": 360
    },
    "device-pixel-ratio": 3,
    "vertical": {
      "width": 360,
      "height": 640
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "6.0.1",
    "architecture": "",
    "model": "Moto G (4)",
    "mobile": true
  },
  "type": "phone"
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
