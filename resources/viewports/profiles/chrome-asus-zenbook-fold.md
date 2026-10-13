# Asus Zenbook Fold

- Profile ID: `chrome-asus-zenbook-fold`
- Device-type hint: `tablet`
- Chrome group: Foldables; upstream type: `tablet`
- Shown by default: false
- Device pixel ratio: 1.5
- Capabilities: touch
- Foldable: true; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 853 × 1280 |
| default | horizontal | 1280 × 853 |
| spanned | vertical-spanned | 1706 × 1280 |
| spanned | horizontal-spanned | 1280 × 1706 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 47,
  "show-by-default": false,
  "foldable-screen": true,
  "title": "Asus Zenbook Fold",
  "screen": {
    "horizontal": {
      "width": 1280,
      "height": 853
    },
    "device-pixel-ratio": 1.5,
    "vertical": {
      "width": 853,
      "height": 1280
    },
    "vertical-spanned": {
      "width": 1706,
      "height": 1280,
      "hinge": {
        "width": 107,
        "height": 1280,
        "x": 800,
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
      "width": 1280,
      "height": 1706,
      "hinge": {
        "width": 1706,
        "height": 107,
        "x": 0,
        "y": 800,
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
    "touch"
  ],
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36",
  "user-agent-metadata": {
    "platform": "Windows",
    "platformVersion": "11.0",
    "architecture": "",
    "model": "UX9702AA",
    "mobile": false
  },
  "type": "tablet",
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
