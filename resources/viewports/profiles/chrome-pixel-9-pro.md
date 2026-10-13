# Pixel 9 Pro

- Profile ID: `chrome-pixel-9-pro`
- Device-type hint: `mobile`
- Chrome group: Mobile; upstream type: `phone`
- Shown by default: true
- Device pixel ratio: 3
- Capabilities: touch, mobile
- Foldable: false; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 427 × 952 |
| default | horizontal | 952 × 427 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 35,
  "show-by-default": true,
  "title": "Pixel 9 Pro",
  "screen": {
    "horizontal": {
      "width": 952,
      "height": 427
    },
    "device-pixel-ratio": 3,
    "vertical": {
      "width": 427,
      "height": 952
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (Linux; Android 14; Pixel 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "14",
    "architecture": "",
    "model": "Pixel 9 Pro",
    "mobile": true
  },
  "type": "phone",
  "modes": [
    {
      "title": "default",
      "orientation": "vertical",
      "safe-area-insets": {
        "left": 0,
        "top": 68,
        "right": 0,
        "bottom": 0
      },
      "cutout": {
        "shape": "circle",
        "x": 195,
        "y": 0,
        "width": 36,
        "height": 68,
        "cx": 213,
        "cy": 34,
        "radius": 16
      }
    },
    {
      "title": "default",
      "orientation": "horizontal",
      "safe-area-insets": {
        "left": 0,
        "top": 0,
        "right": 68,
        "bottom": 0
      }
    }
  ]
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
