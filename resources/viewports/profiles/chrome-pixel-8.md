# Pixel 8

- Profile ID: `chrome-pixel-8`
- Device-type hint: `mobile`
- Chrome group: Mobile; upstream type: `phone`
- Shown by default: false
- Device pixel ratio: 2.625
- Capabilities: touch, mobile
- Foldable: false; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 412 × 915 |
| default | horizontal | 915 × 412 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 31,
  "show-by-default": false,
  "title": "Pixel 8",
  "screen": {
    "horizontal": {
      "width": 915,
      "height": 412
    },
    "device-pixel-ratio": 2.625,
    "vertical": {
      "width": 412,
      "height": 915
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "14",
    "architecture": "",
    "model": "Pixel 8",
    "mobile": true
  },
  "type": "phone",
  "modes": [
    {
      "title": "default",
      "orientation": "vertical",
      "safe-area-insets": {
        "left": 0,
        "top": 50,
        "right": 0,
        "bottom": 0
      },
      "cutout": {
        "shape": "circle",
        "x": 182,
        "y": 0,
        "width": 46,
        "height": 50,
        "cx": 206,
        "cy": 25,
        "radius": 14
      }
    },
    {
      "title": "default",
      "orientation": "horizontal",
      "safe-area-insets": {
        "left": 0,
        "top": 0,
        "right": 50,
        "bottom": 0
      }
    }
  ]
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
