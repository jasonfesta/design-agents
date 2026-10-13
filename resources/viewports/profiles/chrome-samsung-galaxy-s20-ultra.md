# Samsung Galaxy S20 Ultra

- Profile ID: `chrome-samsung-galaxy-s20-ultra`
- Device-type hint: `mobile`
- Chrome group: Mobile; upstream type: `phone`
- Shown by default: false
- Device pixel ratio: 3.5
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
  "order": 39,
  "show-by-default": false,
  "title": "Samsung Galaxy S20 Ultra",
  "screen": {
    "horizontal": {
      "width": 915,
      "height": 412
    },
    "device-pixel-ratio": 3.5,
    "vertical": {
      "width": 412,
      "height": 915
    }
  },
  "capabilities": [
    "touch",
    "mobile"
  ],
  "user-agent": "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36",
  "user-agent-metadata": {
    "platform": "Android",
    "platformVersion": "13",
    "architecture": "",
    "model": "SM-G981B",
    "mobile": true
  },
  "type": "phone"
}
```

## Use in Dial and Dream

Pin this profile and the actual browser version in the direction record. Choose one declared mode, then record measured layout dimensions, DPR, input, posture/spanning, theme, and screenshot framing. Compare candidate and base under the same settings. This profile does not establish native execution, physical-device fidelity, or personal taste.

[Pinned DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts) · [Chrome index](../CHROME.md) · [Source and license](../../history/sources/chrome/2026-10-13/README.md)
