# iPhone SE

- Profile ID: `chrome-iphone-se`
- Device-type hint: `mobile`
- Chrome group: Mobile; upstream type: `phone`
- Shown by default: true
- Device pixel ratio: 2
- Capabilities: touch, mobile
- Foldable: false; dual-screen: false
- Status: source-defined browser emulation profile; project/device support not yet verified.

## Declared modes

| Mode | Orientation | Width × height (CSS px) |
| --- | --- | --- |
| default | vertical | 375 × 667 |
| default | horizontal | 667 × 375 |

## Exact preset settings

This retains supplied insets, cutouts, hinge geometry, spanned dimensions, client hints, and user-agent metadata. An absent field is unspecified, not evidence of zero safe area. `%s` in a user agent is a runtime Chrome-version placeholder. Only declared modes above are selectable; unused screen records are preserved as source data.

```json
{
  "order": 10,
  "show-by-default": true,
  "title": "iPhone SE",
  "screen": {
    "horizontal": {
      "width": 667,
      "height": 375
    },
    "device-pixel-ratio": 2,
    "vertical": {
      "width": 375,
      "height": 667
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
  "user-agent-metadata": {
    "platform": "iOS",
    "platformVersion": "18.5",
    "architecture": "",
    "model": "iPhone",
    "mobile": true
  },
  "type": "phone"
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
