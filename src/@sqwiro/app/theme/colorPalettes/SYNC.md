# Color Palettes — Sync Notice

These palette files are a **port** of the desktop design system's palettes, the single source
of truth for merchant theming across SQWIRO.

**Upstream (source of truth):**
`/Users/bernardgaitho/@cloudhub/@sqwiroux/shadui/shadcn/theme/colorPalettes/`

A merchant selects one of these palettes (by name, e.g. `slateTheme`, `fuchsiaTheme`) in the
desktop **System app** settings. The chosen name is stored on the merchant record as
`ApplicationSettings.ColorTheme` and consumed here on mobile via `DynamicThemeProvider`.

## What was ported

- `commonColors.ts` — Tailwind hex shade scales
- All 24 palette files (`slate.ts`, `fuchsia.ts`, `anthropic.ts`, `jungle.ts`, …)
- `index.ts` — the `colorPalettes` map (name → palette)

Each palette keeps its `cssVars.light` / `cssVars.dark` block. Mobile does **not** use CSS
variables, but `resolveTheme.ts` reads `cssVars[mode]` (converting HSL→hex via `hslToHex.ts`)
to drive dark-mode **surface** colors (background/foreground/card/border/input/muted). Brand
colors (`primaryColors … dangerColors`) come straight from the hex groups and are
mode-independent.

## Keeping in sync

If the desktop adds or edits a palette, **re-copy** the changed file(s) from the upstream
directory above. The files are framework-agnostic plain objects (no DOM/React/Tailwind
imports), so a straight copy is safe. If a new palette is added, also add its entry to
`index.ts`.
