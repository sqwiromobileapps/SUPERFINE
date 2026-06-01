import baseColors from './Colors';
import colorPalettes from './colorPalettes';
import hslToHex from './hslToHex';

export type ThemeMode = 'light' | 'dark';

/** Matches desktop's default in App.tsx `MerchantTheme`. */
export const DEFAULT_THEME = 'fuchsiaTheme';

export type ColorThemeName = keyof typeof colorPalettes;

/** The 11-step tonal scale (Tailwind `theme-50 … theme-950`). */
export type ThemeScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

/**
 * The full shadcn semantic token set, exposed on the resolved `colors` so RN
 * components can read `colors.primary`, `colors.background`, `colors.card`, etc.
 * — the mobile equivalent of web's `bg-primary` / `text-primary-foreground`.
 */
type SemanticTokens = {
  // Surface — mode-dependent (from cssVars[mode]).
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
  // Brand foregrounds — paired with the brand `.main`, taken from cssVars.light
  // (mobile keeps brand colors mode-independent, so these stay constant too).
  primaryForeground: string;
  secondaryForeground: string;
  successForeground: string;
  infoForeground: string;
  warningForeground: string;
  dangerForeground: string;
  destructiveForeground: string;
  // Tonal scale.
  theme: ThemeScale;
};

export type AppColors = typeof baseColors & Partial<SemanticTokens>;

const isKnownTheme = (name: string): name is ColorThemeName =>
  Object.prototype.hasOwnProperty.call(colorPalettes, name);

/**
 * Resolve a merchant's chosen palette name + the current mode into the mobile
 * `colors` token object consumed via `useAppTheme()`.
 *
 * - **Brand colors** (`primary … danger` + the `*Colors` groups) come straight
 *   from the palette's hex groups and are MODE-INDEPENDENT — the merchant's brand.
 * - **Surface colors** (background/foreground/card/popover/muted/accent/border/
 *   input/ring/destructive) come from `cssVars[mode]` (HSL→hex) — this drives dark
 *   mode without touching the brand colors.
 * - **Brand foregrounds** (text drawn ON a brand color) come from `cssVars.light`,
 *   the contrast paired with the brand `.main`. We use the light value in BOTH
 *   modes because the brand color itself doesn't flip with mode on mobile (whereas
 *   web's `--primary` becomes near-white in dark mode and would invert the text).
 *
 * Falls back to `fuchsiaTheme` for unknown names (matches desktop).
 */
const resolveColorTheme = (
  themeName: string | undefined | null,
  mode: ThemeMode = 'light',
): AppColors => {
  const name = themeName && isKnownTheme(themeName) ? themeName : DEFAULT_THEME;
  const palette = colorPalettes[name] as any;
  const vars = (palette?.cssVars && palette.cssVars[mode]) || {};
  const varsLight = (palette?.cssVars && palette.cssVars.light) || {};

  const tokens: Record<string, any> = {};

  const fromMode = (key: string, varKey?: string) => {
    const v = vars[varKey ?? key];
    if (v) tokens[key] = hslToHex(v);
  };
  const fromLight = (key: string, varKey: string) => {
    const v = varsLight[varKey];
    if (v) tokens[key] = hslToHex(v);
  };

  // Surface tokens — mode-dependent.
  fromMode('background');
  if (vars.foreground) {
    const fg = hslToHex(vars.foreground);
    tokens.foreground = fg;
    tokens.text = fg; // mirror onto the legacy `text` key
  }
  fromMode('card');
  fromMode('cardForeground');
  fromMode('popover');
  fromMode('popoverForeground');
  fromMode('muted');
  fromMode('mutedForeground');
  fromMode('accent');
  fromMode('accentForeground');
  fromMode('destructive');
  fromMode('border');
  fromMode('input');
  fromMode('ring');

  // Brand foregrounds — constant (from light mode).
  fromLight('primaryForeground', 'primaryForeground');
  fromLight('secondaryForeground', 'secondaryForeground');
  fromLight('successForeground', 'successForeground');
  fromLight('infoForeground', 'infoForeground');
  fromLight('warningForeground', 'warningForeground');
  fromLight('dangerForeground', 'dangerForeground');
  fromLight('destructiveForeground', 'destructiveForeground');

  // Input/selector field background — translucent white (web `bg-white/50`).
  // Consumed by the shared Input + the core Selector trigger (and thus every
  // selector that wraps them), giving a uniform frosted field on any palette.
  tokens.inputBackgroundColor = 'rgba(255,255,255,0.5)';

  // Tonal scale (theme-50 … theme-950).
  const scale: Partial<ThemeScale> = {};
  ([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const).forEach(
    (step) => {
      const v = vars[`theme${step}`];
      if (v) (scale as Record<number, string>)[step] = hslToHex(v);
    },
  );
  if (Object.keys(scale).length) tokens.theme = scale;

  return {
    ...baseColors,

    // The resolved palette key (e.g. 'emeraldTheme') — handy for display.
    themeName: name,

    // Brand groups — mode-independent.
    primaryColors: palette.primaryColors,
    secondaryColors: palette.secondaryColors,
    successColors: palette.successColors,
    infoColors: palette.infoColors,
    warningColors: palette.warningColors,
    dangerColors: palette.dangerColors,

    primary: palette.primary ?? palette.primaryColors?.main,
    secondary: palette.secondary ?? palette.secondaryColors?.main,
    success: palette.success ?? palette.successColors?.main,
    info: palette.info ?? palette.infoColors?.main,
    warning: palette.warning ?? palette.warningColors?.main,
    danger: palette.danger ?? palette.dangerColors?.main,

    // Semantic tokens — only present keys override base.
    ...tokens,
  } as AppColors;
};

export default resolveColorTheme;
