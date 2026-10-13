# Chrome viewport profiles

Source review October 13, 2026. **46 named device presets, 98 declared modes, seven responsive widths, Responsive, and Custom device** have individual Markdown records. These are viewport settings, not visual styles. Browser support and installed Chrome versions still require project verification.

## Responsive widths

| Chrome label | Width (CSS px) | Device-type hint |
| --- | --- | --- |
| [Mobile S](profiles/chrome-mobile-s.md) | 320 | mobile |
| [Mobile M](profiles/chrome-mobile-m.md) | 375 | mobile |
| [Mobile L](profiles/chrome-mobile-l.md) | 425 | mobile |
| [Tablet](profiles/chrome-tablet.md) | 768 | tablet |
| [Laptop](profiles/chrome-laptop.md) | 1024 | desktop |
| [Laptop L](profiles/chrome-laptop-l.md) | 1440 | desktop |
| [4K](profiles/chrome-wide.md) | 2560 | desktop |

Height is adjustable and must be recorded. The folder at layer 3 uses the complete width × height, while these device-type hints belong to layer 2. Chrome's “4K” label means 2560 CSS px. [Responsive](profiles/chrome-responsive.md) and [Custom device](profiles/chrome-custom.md) cover arbitrary dimensions and custom profiles.

## Complete named-device snapshot

The size below is the first declared mode, not the only orientation. Open a profile for every mode, safe-area/cutout fields, DPR, input flags, and fold/hinge settings. Some presets are hidden until enabled under Edit devices.

| Preset | Chrome group | First mode (CSS px) | DPR | Declared modes |
| --- | --- | --- | --- | --- |
| [iPhone SE](profiles/chrome-iphone-se.md) | Mobile | 375 × 667 | 2 | 2 |
| [iPhone XR](profiles/chrome-iphone-xr.md) | Mobile | 414 × 896 | 2 | 2 |
| [iPhone 12 Pro](profiles/chrome-iphone-12-pro.md) | Mobile | 390 × 844 | 3 | 2 |
| [iPhone 14](profiles/chrome-iphone-14.md) | Mobile | 390 × 844 | 3 | 2 |
| [iPhone 14 Plus](profiles/chrome-iphone-14-plus.md) | Mobile | 428 × 926 | 3 | 2 |
| [iPhone 14 Pro](profiles/chrome-iphone-14-pro.md) | Mobile | 393 × 852 | 3 | 2 |
| [iPhone 14 Pro Max](profiles/chrome-iphone-14-pro-max.md) | Mobile | 430 × 932 | 3 | 2 |
| [iPhone 15](profiles/chrome-iphone-15.md) | Mobile | 393 × 852 | 3 | 2 |
| [iPhone 15 Plus](profiles/chrome-iphone-15-plus.md) | Mobile | 430 × 932 | 3 | 2 |
| [iPhone 15 Pro](profiles/chrome-iphone-15-pro.md) | Mobile | 393 × 852 | 3 | 2 |
| [iPhone 15 Pro Max](profiles/chrome-iphone-15-pro-max.md) | Mobile | 430 × 932 | 3 | 2 |
| [iPhone 16e](profiles/chrome-iphone-16e.md) | Mobile | 390 × 844 | 3 | 2 |
| [iPhone 16](profiles/chrome-iphone-16.md) | Mobile | 393 × 852 | 3 | 2 |
| [iPhone 16 Plus](profiles/chrome-iphone-16-plus.md) | Mobile | 430 × 932 | 3 | 2 |
| [iPhone 16 Pro](profiles/chrome-iphone-16-pro.md) | Mobile | 402 × 874 | 3 | 2 |
| [iPhone 16 Pro Max](profiles/chrome-iphone-16-pro-max.md) | Mobile | 440 × 956 | 3 | 2 |
| [Pixel 7](profiles/chrome-pixel-7.md) | Mobile | 412 × 915 | 2.625 | 2 |
| [Pixel 8](profiles/chrome-pixel-8.md) | Mobile | 412 × 915 | 2.625 | 2 |
| [Pixel 8 Pro](profiles/chrome-pixel-8-pro.md) | Mobile | 448 × 997 | 3 | 2 |
| [Pixel 8a](profiles/chrome-pixel-8a.md) | Mobile | 412 × 915 | 2.625 | 2 |
| [Pixel 9](profiles/chrome-pixel-9.md) | Mobile | 412 × 924 | 2.625 | 2 |
| [Pixel 9 Pro](profiles/chrome-pixel-9-pro.md) | Mobile | 427 × 952 | 3 | 2 |
| [Pixel 9 Pro XL](profiles/chrome-pixel-9-pro-xl.md) | Mobile | 448 × 997 | 3 | 2 |
| [Pixel 10](profiles/chrome-pixel-10.md) | Mobile | 412 × 924 | 2.625 | 2 |
| [Samsung Galaxy S8+](profiles/chrome-samsung-galaxy-s8.md) | Mobile | 360 × 740 | 4 | 2 |
| [Samsung Galaxy S20 Ultra](profiles/chrome-samsung-galaxy-s20-ultra.md) | Mobile | 412 × 915 | 3.5 | 2 |
| [Surface Pro 7](profiles/chrome-surface-pro-7.md) | Tablets and desktops | 912 × 1368 | 2 | 2 |
| [iPad Mini](profiles/chrome-ipad-mini.md) | Tablets and desktops | 768 × 1024 | 2 | 2 |
| [iPad Pro 13](profiles/chrome-ipad-pro-13.md) | Tablets and desktops | 1032 × 1376 | 2 | 2 |
| [Surface Pro 10](profiles/chrome-surface-pro-10.md) | Tablets and desktops | 960 × 1440 | 2 | 2 |
| [Surface Duo](profiles/chrome-surface-duo.md) | Foldables | 540 × 720 | 2.5 | 4 |
| [Samsung Galaxy A55](profiles/chrome-samsung-galaxy-a55.md) | Mobile | 360 × 800 | 2.25 | 2 |
| [Pixel 9 Pro Fold](profiles/chrome-pixel-9-pro-fold.md) | Foldables | 412 × 922 | 2.625 | 4 |
| [Galaxy Z Fold 6](profiles/chrome-galaxy-z-fold-6.md) | Foldables | 412 × 968 | 2.625 | 4 |
| [Galaxy Z Fold 5](profiles/chrome-galaxy-z-fold-5.md) | Foldables | 344 × 882 | 2.625 | 4 |
| [Asus Zenbook Fold](profiles/chrome-asus-zenbook-fold.md) | Foldables | 853 × 1280 | 1.5 | 4 |
| [Samsung Galaxy A51/71](profiles/chrome-samsung-galaxy-a51-71.md) | Mobile | 412 × 914 | 2.625 | 2 |
| [Nest Hub Max](profiles/chrome-nest-hub-max.md) | Smart displays | 1280 × 800 | 2 | 1 |
| [Galaxy Tab S4](profiles/chrome-galaxy-tab-s4.md) | Mobile | 712 × 1138 | 2.25 | 2 |
| [JioPhone 2](profiles/chrome-jiophone-2.md) | Mobile | 240 × 320 | 1 | 2 |
| [Laptop with touch](profiles/chrome-laptop-with-touch.md) | Tablets and desktops | 1280 × 950 | 1 | 1 |
| [Laptop with HiDPI screen](profiles/chrome-laptop-with-hidpi-screen.md) | Tablets and desktops | 1440 × 900 | 2 | 1 |
| [Laptop with MDPI screen](profiles/chrome-laptop-with-mdpi-screen.md) | Tablets and desktops | 1280 × 800 | 1 | 1 |
| [Moto G4](profiles/chrome-moto-g4.md) | Mobile | 360 × 640 | 3 | 2 |
| [Moto G Power](profiles/chrome-moto-g-power.md) | Mobile | 412 × 823 | 1.75 | 2 |
| [Facebook on Android](profiles/chrome-facebook-on-android.md) | Mobile | 412 × 892 | 3.5 | 2 |

## Emulation settings to carry into a project

- Select the actual portrait, landscape, spanned, or unspanned mode from its profile. Folded/continuous posture and dual-screen spanning are fields, not new folder levels.
- Record device scale, zoom, input/rendering mode, theme, user agent/client hints, safe areas, and browser version. Mobile (touch), Mobile (no touch), Desktop, and Desktop (touch) are separate modes.
- Device frame visibility, rulers, screenshot framing, network/CPU throttling, and sensor/location overrides are test settings, not aesthetic styles or new viewport categories. Keep them consistent for comparisons.
- Source quirks remain preserved: Galaxy Tab S4 is typed `phone` upstream; our device-type hint is tablet. Nest Hub Max is the sole smart-display preset in this revision. Laptop presets declare landscape only. Missing inset fields are not proof of no hardware occlusion.
- Native TV/watch and other unlisted targets use [native references](NATIVE.md) or explicit custom records. Chrome emulation does not prove native, Safari, GPU, CPU, or physical-device behavior. Do not require all presets on every project; select relevant targets and include responsive intermediate sizes.

## Sources

[Chrome Device Mode](https://developer.chrome.com/docs/devtools/device-mode) and [device configuration](https://developer.chrome.com/docs/devtools/settings/devices) describe the controls. The complete preset list is pinned to [DevTools source](https://github.com/ChromeDevTools/devtools-frontend/blob/f0dde72d3fc69afc608376f45238e23cb0a7c4e0/front_end/models/emulation/EmulatedDevices.ts), commit `f0dde72d3fc69afc608376f45238e23cb0a7c4e0`. The [original source, factual extraction, hashes, and BSD license](../history/sources/chrome/2026-10-13/README.md) are preserved. This snapshot can be newer than installed Chrome; record the actual browser when using it.
