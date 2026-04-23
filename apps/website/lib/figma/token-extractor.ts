/**
 * Token Extractor
 *
 * Extracts design tokens from two sources:
 * 1. Inline CSS variables resolved from a live DOM (browser-side)
 * 2. Static Tailwind theme configuration (server-readable)
 *
 * Output matches the `tokens` key of DesignSystemExport schema.
 */

export interface ColorTokens {
  [key: string]: string;
}

export interface SpacingTokens {
  [key: string]: number;
}

export interface TypographyTokens {
  fontSizes: { [key: string]: string };
  fontWeights: { [key: string]: string };
  fontFamilies: { [key: string]: string };
  lineHeights: { [key: string]: string };
  letterSpacings: { [key: string]: string };
}

export interface RadiusTokens {
  [key: string]: string;
}

export interface ShadowTokens {
  [key: string]: string;
}

export interface DesignTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS Variable reader (runs in browser via /figma page)
// ─────────────────────────────────────────────────────────────────────────────

/** All CSS variable names used by the Gluestack theme (from globals.css + tailwind config) */
const CSS_VAR_NAMES = [
  '--foreground',
  '--background',
  '--card',
  '--card-foreground',
  '--popover',
  '--popover-foreground',
  '--primary',
  '--primary-foreground',
  '--secondary',
  '--secondary-foreground',
  '--muted',
  '--muted-foreground',
  '--accent',
  '--accent-foreground',
  '--destructive',
  '--border',
  '--input',
  '--ring',
  '--sidebar',
  '--sidebar-foreground',
  '--sidebar-primary',
  '--sidebar-primary-foreground',
  '--sidebar-accent',
  '--sidebar-accent-foreground',
  '--sidebar-border',
  '--sidebar-ring',
  '--chart-1',
  '--chart-2',
  '--chart-3',
  '--chart-4',
  '--chart-5',
];

/** Resolve CSS variables from the live DOM (browser only) */
export function extractCSSVariables(): ColorTokens {
  if (typeof window === 'undefined') return {};

  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  const tokens: ColorTokens = {};

  for (const varName of CSS_VAR_NAMES) {
    const value = computedStyle.getPropertyValue(varName).trim();
    if (value) {
      // CSS vars are stored as "r g b" channel values (Tailwind CSS-in-JS pattern)
      // Convert to full hex/rgb for Figma
      const tokenName = varName.replace('--', '');
      tokens[tokenName] = resolveColorValue(value);
    }
  }

  // Also scan for any additional --color-* custom properties
  for (let i = 0; i < root.style.length; i++) {
    const prop = root.style[i];
    if (prop.startsWith('--') && !tokens[prop.replace('--', '')]) {
      const value = computedStyle.getPropertyValue(prop).trim();
      if (value) {
        tokens[prop.replace('--', '')] = resolveColorValue(value);
      }
    }
  }

  return tokens;
}

/** Convert "r g b" channel string → "rgb(r, g, b)" */
function resolveColorValue(raw: string): string {
  const trimmed = raw.trim();
  // Channel-only format: "30 41 59"
  if (/^\d+\s+\d+\s+\d+$/.test(trimmed)) {
    const [r, g, b] = trimmed.split(/\s+/);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return trimmed;
}

// ─────────────────────────────────────────────────────────────────────────────
// Static Tailwind token definitions
// (keeping these as plain JS so they work server-side too)
// ─────────────────────────────────────────────────────────────────────────────

/** Tailwind default spacing scale (px values, subset) */
export const TAILWIND_SPACING: SpacingTokens = {
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '4': 16,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,
  '11': 44,
  '12': 48,
  '14': 56,
  '16': 64,
  '20': 80,
  '24': 96,
  '28': 112,
  '32': 128,
  '36': 144,
  '40': 160,
  '44': 176,
  '48': 192,
  '52': 208,
  '56': 224,
  '60': 240,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
};

/** Gluestack website typography scale (from tailwind.config.ts + defaults) */
export const TAILWIND_TYPOGRAPHY: TypographyTokens = {
  fontSizes: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
  },
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    extrablack: '950',
  },
  fontFamilies: {
    sans: 'Geist Sans',
    mono: 'Geist Mono',
    jakarta: 'Plus Jakarta Sans',
    roboto: 'Roboto',
    code: 'Source Code Pro',
    inter: 'Inter',
    'space-mono': 'Space Mono',
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

/** Border radius tokens (from tailwind.config.ts) */
export const TAILWIND_RADIUS: RadiusTokens = {
  none: '0px',
  sm: '6px',
  DEFAULT: '8px',
  md: '8px',
  lg: '10px',
  xl: '14px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
};

/** Box shadow tokens (from tailwind.config.ts) */
export const TAILWIND_SHADOWS: ShadowTokens = {
  'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
  'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
  'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
  'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
  'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
  'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
  'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
  'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
  'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

// ─────────────────────────────────────────────────────────────────────────────
// Main extractor
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Assembles the full token payload.
 * Call from a browser context so CSS vars can be resolved.
 */
export function extractTokens(): DesignTokens {
  return {
    colors: extractCSSVariables(),
    spacing: TAILWIND_SPACING,
    typography: TAILWIND_TYPOGRAPHY,
    radius: TAILWIND_RADIUS,
    shadows: TAILWIND_SHADOWS,
  };
}
