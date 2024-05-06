import { DEFAULT_PALETTE_CONFIG } from './constants';
import {
  HSLToHex,
  checkHash,
  clamp,
  hexToHSL,
  lightnessFromHSLum,
  luminanceFromHex,
  unsignedModulo,
} from './helper';
import {
  createDistributionValues,
  createHueScale,
  createSaturationScale,
} from './scales';
import type { PaletteConfig } from './types';

export function createSwatches(palette: PaletteConfig) {
  const { value, valueStop } = palette;

  // Tweaks may be passed in, otherwise use defaults
  const useLightness =
    palette.useLightness ?? DEFAULT_PALETTE_CONFIG.useLightness;
  const h = palette.h ?? DEFAULT_PALETTE_CONFIG.h;
  const s = palette.s ?? DEFAULT_PALETTE_CONFIG.s;
  const lMin = palette.lMin ?? DEFAULT_PALETTE_CONFIG.lMin;
  const lMax = palette.lMax ?? DEFAULT_PALETTE_CONFIG.lMax;

  // Create hue and saturation scales based on tweaks
  const hueScale = createHueScale(h, valueStop);
  const saturationScale = createSaturationScale(s, valueStop);

  // Get the base hex's H/S/L values
  const { h: valueH, s: valueS, l: valueL } = hexToHSL(value);

  // Create lightness scales based on tweak + lightness/luminance of current value
  const lightnessValue = useLightness ? valueL : luminanceFromHex(value);
  const distributionScale = createDistributionValues(
    lMin,
    lMax,
    lightnessValue,
    valueStop
  );

  const swatches = hueScale.map(({ stop }, stopIndex) => {
    const newH = unsignedModulo(valueH + hueScale[stopIndex].tweak, 360);
    const newS = clamp(valueS + saturationScale[stopIndex].tweak, 0, 100);
    const newL = useLightness
      ? distributionScale[stopIndex].tweak
      : lightnessFromHSLum(newH, newS, distributionScale[stopIndex].tweak);

    const newHex = HSLToHex(newH, newS, newL);

    return {
      stop,
      hex:
        // stop === valueStop ? `#${value.toUpperCase()}` : newHex.toUpperCase(),
        stop === 500
          ? checkHash(palette.value).toUpperCase()
          : newHex.toUpperCase(),
      // Used in graphs
      h: newH,
      hScale:
        ((unsignedModulo(hueScale[stopIndex].tweak + 180, 360) - 180) / 180) *
        50,
      s: newS,
      sScale: newS - 50,
      l: newL,
    };
  });

  return swatches;
}
