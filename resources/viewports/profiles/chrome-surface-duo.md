# Surface Duo

- Profile ID: `chrome-surface-duo`
- Device-type hint: `mobile`
- Chrome group: Foldables; upstream type: `phone`
- Shown by default: false
- Device pixel ratio: 2.5
- Capabilities: touch, mobile
- Foldable: false; dual-screen: true
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 540 × 720 |
| default | horizontal | 720 × 540 |
| spanned | vertical-spanned | 1114 × 720 |
| spanned | horizontal-spanned | 720 × 1114 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 44,
  "show-by-default": false,
  "dual-screen": true,
  "title": "Surface Duo",
  "screen": {
    "horizontal": {
      "width": 720,
      "height": 540
    },
    "device-pixel-ratio": 2.5,
    "vertical": {
      "width": 540,
      "height": 720
    },
    "vertical-spanned": {
      "width": 1114,
      "height": 720,
      "hinge": {
        "width": 34,
        "height": 720,
        "x": 540,
        "y": 0,
        "contentColor": {
          "r": 38,
          "g": 38,
          "b": 38,
          "a": 1
        }
      }
    },
    "horizontal-spanned": {
      "width": 720,
      "height": 1114,
      "hinge": {
        "width": 720,
        "height": 34,
        "x": 0,
        "y": 540,
        "contentColor": {
          "r": 38,
          "g": 38,
          "b": 38,
          "a": 1
        }
      }
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (Linux; Android 11.0; Surface Duo) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "11.0",
    "architecture": "",
    "model": "Surface Duo",
    "mobile": true
  },
  "type": "phone",
  "modes": [
    {
      "title": "default",
      "orientation": "vertical"
    },
    {
      "title": "default",
      "orientation": "horizontal"
    },
    {
      "title": "spanned",
      "orientation": "vertical-spanned"
    },
    {
      "title": "spanned",
      "orientation": "horizontal-spanned"
    }
  ]
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
