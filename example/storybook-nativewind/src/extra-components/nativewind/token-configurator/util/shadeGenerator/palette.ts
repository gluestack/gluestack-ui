import { DEFAULT_PALETTE_CONFIG } from './constants';
import { createSwatches } from './createSwatch';
import { isHex, isValidName } from './helper';
import { PaletteConfig } from './types';

export function createPaletteFromNameValue(
  name: string,
  value: string
): PaletteConfig | null {
  if (!name || !isValidName(name) || !value || !isHex(value)) {
    return null;
  }

  const nameValue = {
    ...DEFAULT_PALETTE_CONFIG,
    id: crypto.randomUUID(),
    name,
    value: value.toUpperCase(),
    swatches: [],
  };

  return {
    ...nameValue,
    swatches: createSwatches(nameValue),
  };
}
