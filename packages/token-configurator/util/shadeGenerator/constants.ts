import type { Mode, PaletteConfig } from './types.js';

export const DEFAULT_STOP = 500;
export const DEFAULT_STOPS = [
  0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000,
];

export const MODES: Mode[] = [`hex`, `p-3`, 'oklch'];

export const DEFAULT_PALETTE_CONFIG: PaletteConfig = {
  id: ``,
  name: ``,
  value: ``,
  valueStop: DEFAULT_STOP,
  swatches: [],
  h: 0,
  s: 0,
  lMin: 0,
  lMax: 100,
  useLightness: true,
  mode: MODES[0],
};

export const RANDOM_PALETTES = [
  {
    name: `blue`,
    value: `3B82F6`,
  },
  {
    name: `red`,
    value: `EF4444`,
  },
  {
    name: `green`,
    value: `22C55E`,
  },
  {
    name: `purple`,
    value: `A855F7`,
  },
  {
    name: `brand`,
    value: `2522FC`,
  },
];
