# Galaxy Z Fold 6

- Profile ID: `chrome-galaxy-z-fold-6`
- Device-type hint: `mobile`
- Chrome group: Foldables; upstream type: `phone`
- Shown by default: true
- Device pixel ratio: 2.625
- Capabilities: touch, mobile
- Foldable: true; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 412 × 968 |
| default | horizontal | 968 × 412 |
| spanned | vertical-spanned | 744 × 860 |
| spanned | horizontal-spanned | 860 × 744 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 46,
  "show-by-default": true,
  "foldable-screen": true,
  "title": "Galaxy Z Fold 6",
  "screen": {
    "horizontal": {
      "width": 968,
      "height": 412
    },
    "device-pixel-ratio": 2.625,
    "vertical": {
      "width": 412,
      "height": 968
    },
    "vertical-spanned": {
      "width": 744,
      "height": 860,
      "hinge": {
        "width": 0,
        "height": 860,
        "x": 372,
        "y": 0,
        "contentColor": {
          "r": 38,
          "g": 38,
          "b": 38,
          "a": 0.2
        },
        "outlineColor": {
          "r": 38,
          "g": 38,
          "b": 38,
          "a": 0.7
        }
      }
    },
    "horizontal-spanned": {
      "width": 860,
      "height": 744,
      "hinge": {
        "width": 860,
        "height": 0,
        "x": 0,
        "y": 372,
        "contentColor": {
          "r": 38,
          "g": 38,
          "b": 38,
          "a": 0.2
        },
        "outlineColor": {
          "r": 38,
          "g": 38,
          "b": 38,
          "a": 0.7
        }
      }
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (Linux; Android 14; SM-F956U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "14",
    "architecture": "",
    "model": "SM-F956U",
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
