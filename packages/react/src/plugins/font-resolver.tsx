import React, { useMemo } from 'react';
import type { IStyled, IStyledPlugin } from '../createStyled';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';
import { deepMerge } from '../utils';

const fontWeights: any = {
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
  '950': 'ExtraBlack',
};

const DANK_STYLE_FONT_RESOLVER_STRATEGY = 'web';

/* 
  process.env.DANK_STYLE_FONT_RESOLVER_STRATEGY= expo | web
  android / ios - font merge logic
  NextJS + web - web logic
  else (assuming it's expo) - Font merge logic
*/

function isExpoStrategy() {
  return !(
    (typeof window !== 'undefined' && //@ts-ignore
      window.next) ||
    process.env.DANK_STYLE_FONT_RESOLVER_STRATEGY ===
      DANK_STYLE_FONT_RESOLVER_STRATEGY ||
    process.env.REACT_APP_DANK_STYLE_FONT_RESOLVER_STRATEGY ===
      DANK_STYLE_FONT_RESOLVER_STRATEGY ||
    process.env.STORYBOOK_DANK_STYLE_FONT_RESOLVER_STRATEGY ===
      DANK_STYLE_FONT_RESOLVER_STRATEGY ||
    process.env.NEXT_PUBLIC_STORYBOOK_DANK_STYLE_FONT_RESOLVER_STRATEGY ===
      DANK_STYLE_FONT_RESOLVER_STRATEGY
  );
}

interface FontPlugin {
  mapFonts?(style: any): any;
}

export class FontResolver implements IStyledPlugin, FontPlugin {
  name: 'FontHandler';
  styledUtils: IStyled | undefined = {};

  mapFonts(style: any) {
    if (isExpoStrategy()) {
      let fontFamilyValue = style.fontFamily
        .replace(/ /g, '')
        .replace(/^\w/, (c: any) => c.toUpperCase());

      if (
        style.fontWeight &&
        (typeof style.fontWeight === 'string' ||
          typeof style.fontWeight === 'number')
      ) {
        fontFamilyValue = `${fontFamilyValue}_${style.fontWeight}`;
        if (
          typeof style.fontWeight === 'string' &&
          !style.fontWeight.startsWith('$')
        ) {
          fontFamilyValue = `${fontFamilyValue}${
            fontWeights[style.fontWeight]
          }`;
        } else if (typeof style.fontWeight === 'number') {
          const fontWeightString = fontWeights[style.fontWeight];
          fontFamilyValue = `${fontFamilyValue}${fontWeightString}`;
        }
      }
      if (style.fontStyle && typeof style.fontStyle === 'string') {
        const fontStyle = style.fontStyle.replace(/^\w/, (c: any) =>
          c.toUpperCase()
        );
        fontFamilyValue = `${fontFamilyValue}_${fontStyle}`;
      }

      style.fontFamily = fontFamilyValue;

      this.#fontFamily = fontFamilyValue;

      delete style.fontWeight;
      delete style.fontStyle;
    }
  }

  register(styledUtils: any = {}) {
    if (this.styledUtils) {
      this.styledUtils.aliases = {
        ...this.styledUtils?.aliases,
        ...styledUtils?.aliases,
      };

      this.styledUtils.tokens = {
        ...this.styledUtils?.tokens,
        ...styledUtils?.tokens,
      };

      this.styledUtils.ref = styledUtils?.ref;
    }
  }

  constructor({
    styledUtils,
    mapFonts,
  }: {
    styledUtils?: IStyled;
    mapFonts?: FontPlugin['mapFonts'];
  } = {}) {
    this.register(styledUtils);
    this.name = 'FontHandler';
    this.mapFonts = mapFonts || this.mapFonts;
  }

  inputMiddleWare(styledObj: any = {}, fontStyleObject: any = {}) {
    const modifiedStyledObject = this.fontHandler({
      ...fontStyleObject,
      ...styledObj,
    });

    return modifiedStyledObject;
  }

  #fontFamily: any = '';

  #fontFamilyTokenConfig: any = {};

  #fontWeightsTokenConfig: any = {};

  fontHandler(styledObject: any = {}, fontStyleObject: any = {}) {
    for (const styledObjectKey in styledObject) {
      if (typeof styledObject[styledObjectKey] === 'object') {
        this.fontHandler(styledObject[styledObjectKey]);
      } else if (
        styledObjectKey === 'fontFamily' &&
        typeof styledObject[styledObjectKey] === 'string'
      ) {
        if (!styledObject.fontFamily) {
          styledObject.fontFamily = fontStyleObject?.fontFamily;
        }
        if (!styledObject.fontStyle) {
          styledObject.fontStyle = fontStyleObject?.fontStyle;
        }
        if (!styledObject.fontWeight) {
          styledObject.fontWeight = fontStyleObject?.fontWeight ?? '400';
        }

        if (styledObject.fontFamily.startsWith('$')) {
          const fontFamily = styledObject.fontFamily.slice(1);
          styledObject.fontFamily =
            this.#fontFamilyTokenConfig?.[fontFamily] ??
            styledObject.fontFamily;
        }
        if (
          typeof styledObject.fontWeight === 'string' &&
          styledObject.fontWeight.startsWith('$')
        ) {
          const fontWeight = styledObject.fontWeight.slice(1);
          styledObject.fontWeight =
            this.#fontWeightsTokenConfig?.[fontWeight] ??
            styledObject.fontWeight;
        }

        this.mapFonts(styledObject);
      }
    }

    return styledObject;
  }

  componentMiddleWare({ NewComp, extendedConfig }: any) {
    const fontFamilyFromStyledObject = this.#fontFamily;
    const Comp = React.forwardRef((props: any, ref: any) => {
      const styledContext = useStyled();
      const CONFIG = useMemo(
        () => ({
          ...styledContext.config,
          propertyTokenMap,
        }),
        [styledContext.config]
      );
      let componentExtendedConfig = CONFIG;
      if (extendedConfig) {
        componentExtendedConfig = deepMerge(CONFIG, extendedConfig);
      }
      this.#fontFamilyTokenConfig = componentExtendedConfig?.tokens?.fonts;
      this.#fontWeightsTokenConfig =
        componentExtendedConfig?.tokens?.fontWeights;
      const { sx, ...restProps } = props;

      let fontStyleObject: any = {};

      if (fontFamilyFromStyledObject) {
        // const splitFontFamily = /^([\w-]+)_([\w-]+)(?:_([\w-]+))?$/;
        const [family, weight, style = ''] =
          fontFamilyFromStyledObject.split('_');

        fontStyleObject = {
          fontFamily: family,
          fontWeight: weight.startsWith('$')
            ? weight
            : weight.match(/(\d+)\D+/)[1],
          fontStyle: style.replace(/^\w/, (c: any) => c.toLowerCase()),
        };
      }

      fontStyleObject = {
        fontFamily: restProps?.fontFamily ?? fontStyleObject?.fontFamily,
        fontWeight: restProps?.fontWeight ?? fontStyleObject?.fontWeight,
        fontStyle: restProps?.fontStyle ?? fontStyleObject?.fontStyle,
      };

      delete restProps.fontFamily;
      delete restProps.fontWeight;
      delete restProps.fontStyle;

      const resolvedFontsStyledWithStyledObject = this.inputMiddleWare(
        sx,
        fontStyleObject
      );

      return (
        <NewComp
          sx={resolvedFontsStyledWithStyledObject}
          {...restProps}
          ref={ref}
        />
      );
    });
    return Comp;
  }
}
