# Device types

```text
ATLAS / 02 DEVICE
────────────────────────────────────────────
mobile · tablet · desktop · tv
```

Device type is layer 2. It describes the target device class and interaction context. [Viewport size](../viewports/README.md) is layer 3 and always records width × height separately.

| Device type | Interaction details to record |
| --- | --- |
| mobile | Touch, compact reach, keyboard occlusion, safe areas, rotation |
| tablet | Touch and possible pen/keyboard/pointer, multitasking, rotation |
| desktop | Resizable windows, keyboard, pointer, possible touch |
| tv | Viewing distance, remote/controller focus, safe areas, text legibility |

These choices are available for apps, games, and websites when the actual runtime supports the target. A category or style does not determine device compatibility. Chrome device names remain source presets within the selected size record.

```text
design type
└── device type
    └── viewport size
        └── category
            └── subcategory
                └── style
```

> By the way — an iPhone is a device reference. `390x844` is a viewport size. Neither is a style.

Earlier watch references remain in [native research](../viewports/NATIVE.md); watch is not an added fifth device type in this four-entry menu. Extend the menu through Atlas when a real target needs it.
