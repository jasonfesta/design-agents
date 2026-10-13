# Native and game viewport references

Verified October 12, 2026 · Keep native layout units separate from browser CSS pixels

## Android application windows

Android's width classes use the available app window in dp: Compact below 600; Medium from 600 to below 840; Expanded from 840 to below 1200; Large from 1200 to below 1600; Extra large at 1600 and above. Height and window changes also matter. These are window classes, not fixed device identities. [Android window-size guidance](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes)

For a native phone/tablet/desktop target, choose its emulator or actual window, then record the measured dp size and class. Do not turn Chrome CSS values into Android dp or Apple points without a target-specific mapping. Apple targets need their own simulator/device dimensions before support is verified.

## TV

Android's TV guide uses a 960 × 540 reference canvas, described as pixels in its layout section; implementation layout uses density-aware sizing. Record the native target's actual units and safe area. [Android TV layouts](https://developer.android.com/design/ui/tv/guides/styles/layouts?hl=en)

For desktop/TV games, 1920 × 1080 render pixels is a proposed 16:9 comparison target in this library, with 1280 × 720 or 3840 × 2160 variants when the project requires them. These are render targets, not universal UI viewports. Save render scale, aspect-ratio handling, HUD scale, safe areas, and controller navigation separately. Browser games also retain their CSS layout dimensions.

## Watch

Wear OS tooling defines these round preview devices. The round boundary is part of the profile. [WearDevices API reference](https://developer.android.com/reference/androidx/wear/tooling/preview/devices/WearDevices)

| Profile ID | Layout size | Render size from the reference |
| --- | --- | --- |
| wear-small-round | 192 × 192 dp | 384 × 384 px |
| wear-large-round | 227 × 227 dp | 454 × 454 px |

These references support Wear OS work; they do not establish Apple Watch dimensions or browser support. A watch-game or watch-browser branch is added only for an actual target, with input and runtime evidence.
