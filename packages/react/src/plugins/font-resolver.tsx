import React from 'react';
import { Platform } from 'react-native';
import type { IStyled, IStyledPlugin } from '../createStyled';

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

interface FontPlugin {
  mapFonts?(style: any): any;
}

export class FontResolver implements IStyledPlugin, FontPlugin {
  name: 'FontHandler';
  styledUtils: IStyled | undefined = {};

  mapFonts(style: any) {
    if (Platform.OS !== 'web') {
      let fontFamilyValue = style.fontFamily.replace(/ /g, '');
      if (
        style.fontWeight &&
        (typeof style.fontWeight === 'string' ||
          typeof style.fontWeight === 'number')
      ) {
        fontFamilyValue = `${fontFamilyValue}_${style.fontWeight}${
          fontWeights[style.fontWeight]
        }`;
      }
      if (style.fontStyle && typeof style.fontStyle === 'string') {
        const fontStyle = style.fontStyle.replace(/^\w/, (c: any) =>
          c.toUpperCase()
        );
        fontFamilyValue = `${fontFamilyValue}_${fontStyle}`;
      }

      style.fontFamily = fontFamilyValue;

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

  inputMiddleWare(styledObj: any = {}) {
    this.fontHandler(styledObj);

    return styledObj;
  }

  fontHandler(styledObject: any = {}) {
    for (const styledObjectKey in styledObject) {
      if (typeof styledObject[styledObjectKey] === 'object') {
        this.fontHandler(styledObject[styledObjectKey]);
      } else if (
        styledObjectKey === 'fontFamily' &&
        typeof styledObject[styledObjectKey] === 'string'
      ) {
        this.mapFonts(styledObject);
      }
    }
  }

  componentMiddleWare({ NewComp }: any) {
    return React.forwardRef((props: any, ref: any) => {
      const { sx, ...restProps } = props;
      const resolvedFontsStyledWithStyledObject = this.inputMiddleWare(sx);

      return (
        <NewComp
          sx={resolvedFontsStyledWithStyledObject}
          {...restProps}
          ref={ref}
        />
      );
    });
  }
}
