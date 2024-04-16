import {
  convertTokensToCssVariables,
  platformSpecificSpaceUnits,
  //@ts-ignore
} from '@gluestack-style/react/lib/commonjs/utils';
//@ts-ignore
import { resolveThemes } from '@gluestack-style/react/lib/commonjs/createConfig';
//@ts-ignore
import { updateOrderUnResolvedMap } from '@gluestack-style/react/lib/commonjs/updateOrderUnResolvedMap';
import {
  convertStyledToStyledVerbosed,
  //@ts-ignore
} from '@gluestack-style/react/lib/commonjs/convertSxToSxVerbosed';
const {
  stableHash,
} = require('@gluestack-style/react/lib/commonjs/stableHash');
//@ts-ignore
import { StyleInjector } from '@gluestack-style/react/lib/commonjs/style-sheet';
//@ts-ignore
import { propertyTokenMap } from '@gluestack-style/react/lib/commonjs/propertyTokenMap';

function extractGlobalStyles(CONFIG: any = {}, theme: any = {}) {
  const GluestackStyleSheet = new StyleInjector();
  const verbosedTheme = convertStyledToStyledVerbosed(theme);

  const globalStyleHash = stableHash({
    ...theme,
  });

  const { styledIds } = updateOrderUnResolvedMap(
    verbosedTheme,
    globalStyleHash,
    'global',
    {},
    GluestackStyleSheet,
    'web'
  );

  const toBeInjected = GluestackStyleSheet.resolve(styledIds, CONFIG, {
    propertyTokenMap,
  });

  const current_global_map = GluestackStyleSheet.getStyleMap();

  const orderedResolvedTheme = [];

  current_global_map?.forEach((styledResolved: any) => {
    if (styledIds.includes(styledResolved?.meta?.cssId)) {
      orderedResolvedTheme.push(styledResolved);
    }
  });

  return toBeInjected;
}

export function extractGluestackConfig(gluestackConfig: any) {
  let configWithPlatformSpecificUnits: any = platformSpecificSpaceUnits(
    { ...gluestackConfig },
    'web'
  );

  if (gluestackConfig?.themes) {
    Object.keys(gluestackConfig.themes).forEach((key) => {
      configWithPlatformSpecificUnits.themes[key] = platformSpecificSpaceUnits(
        //@ts-ignore
        { tokens: gluestackConfig.themes[key] },
        'web'
      )?.tokens;
    });
  }

  configWithPlatformSpecificUnits = resolveThemes(
    configWithPlatformSpecificUnits
  );

  let cssVariablesConovertedTokens = convertTokensToCssVariables(
    configWithPlatformSpecificUnits
  )?.trim('\n');

  cssVariablesConovertedTokens += '\n';

  const globalStylesCSS = extractGlobalStyles(
    configWithPlatformSpecificUnits,
    configWithPlatformSpecificUnits?.globalStyle
  );

  Object.keys(globalStylesCSS).forEach((type) => {
    globalStylesCSS[type].forEach(({ cssRuleset }: any) => {
      cssVariablesConovertedTokens += `${cssRuleset}\n`;
    });
  });

  return cssVariablesConovertedTokens;
}
