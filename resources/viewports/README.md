# Viewport sizes

```text
ATLAS / 03 VIEWPORT
────────────────────────────────────────────
identity    width × height
folder      <width>x<height>
web units   CSS px
source      Chrome preset or measured custom viewport
```

The [six-layer structure](../structure.md) is **design type → device type → viewport size → category → subcategory → style**. `mobile`, `tablet`, `desktop`, and `tv` belong to the device layer. A viewport is the measured layout area, such as `390x844` or `1440x900`.

## Chrome presets and names

[The Chrome index](CHROME.md) preserves 46 named device presets, 98 declared modes, seven responsive widths, Responsive, and Custom device in 55 individual settings MDs. A preset can have multiple orientations; multiple presets can share the same size. Select a size and keep the device name and complete emulation settings in its record.

| Example size · CSS px | Captured Chrome preset |
| --- | --- |
| 375 × 667 | iPhone SE |
| 390 × 844 | iPhone 12 Pro, iPhone 14, iPhone 16e |
| 393 × 852 | iPhone 14 Pro, iPhone 15, iPhone 15 Pro, iPhone 16 |
| 768 × 1024 | iPad Mini |
| 1440 × 900 | Laptop with HiDPI screen |

Chrome's responsive presets supply widths only. Choose and record a height before using one as a complete viewport. Custom sizes are valid. Browser/device support must be verified for the actual target.

## Size record

Create a README at the selected size layer in the project. These are fields to fill, not default settings:

```text
design.type     apps / games / websites
device.type     mobile / tablet / desktop / tv
viewport.size   <width>x<height>
viewport.units  CSS px / dp / pt / explicitly named render px
preset.id       Chrome profile link, or custom
preset.mode     portrait / landscape / declared fold mode
pixel.ratio     recorded value
input           touch / pen / keyboard / pointer / controller / remote
safe.area       measured or source-defined values
runtime         browser or native runtime and version
verification    candidate / verified / not applicable
```

Record native units using [the native references](NATIVE.md). CSS pixels, Android dp, Apple points, and render pixels are not interchangeable. If a project targets more than one unit system, use a unit-qualified size ID to prevent collisions and record the conversion.

Responsive implementations share code across their relevant sizes. Record the selected test sizes without duplicating the implementation. Dream and Benchmark compare base and candidate at the same size and preset settings.
