/**
 * Convert a shadcn-style HSL string into a hex color usable by React Native.
 *
 * The desktop palettes store CSS-variable values as space-separated HSL, e.g.
 *   '222.2 84% 4.9%'  ->  '#0b1120'
 * (hue in degrees, saturation %, lightness %). React Native has no CSS variables,
 * so `resolveTheme.ts` uses this to turn each palette's `cssVars[mode]` surface
 * tokens into concrete hex colors.
 *
 * Returns the provided fallback (default '#000000') for any unparseable input.
 */
const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const hslToHex = (hsl: string, fallback = '#000000'): string => {
  if (!hsl || typeof hsl !== 'string') return fallback;

  // Accept "H S% L%" with spaces, commas, and optional % signs.
  const parts = hsl
    .trim()
    .replace(/%/g, '')
    .split(/[\s,]+/)
    .map((p) => Number(p));

  if (parts.length < 3 || parts.some((n) => Number.isNaN(n))) return fallback;

  const h = ((parts[0] % 360) + 360) % 360;
  const s = clamp(parts[1], 0, 100) / 100;
  const l = clamp(parts[2], 0, 100) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export default hslToHex;
