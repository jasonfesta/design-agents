# Galaxy Z Fold 5

- Profile ID: `chrome-galaxy-z-fold-5`
- Device-type hint: `mobile`
- Chrome group: Foldables; upstream type: `phone`
- Shown by default: false
- Device pixel ratio: 2.625
- Capabilities: touch, mobile
- Foldable: true; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 344 × 882 |
| default | horizontal | 882 × 344 |
| spanned | vertical-spanned | 690 × 829 |
| spanned | horizontal-spanned | 829 × 690 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 46,
  "show-by-default": false,
  "foldable-screen": true,
  "title": "Galaxy Z Fold 5",
  "screen": {
    "horizontal": {
      "width": 882,
      "height": 344
    },
    "device-pixel-ratio": 2.625,
    "vertical": {
      "width": 344,
      "height": 882
    },
    "vertical-spanned": {
      "width": 690,
      "height": 829,
      "hinge": {
        "width": 0,
        "height": 829,
        "x": 345,
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
      "width": 829,
      "height": 690,
      "hinge": {
        "width": 829,
        "height": 0,
        "x": 0,
        "y": 345,
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
  "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "10.0",
    "architecture": "",
    "model": "SM-F946U",
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
