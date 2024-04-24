import React, { useMemo } from 'react';
import type { IStyled, IStyledPlugin } from '../types';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';
import { deepMerge, setObjectKeyValue } from '../utils';
import { getVariantProps } from '../styled';
import { StyleSheet } from 'react-native';
import { deepClone } from '../utils/cssify/utils/common';

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

const STYLE_FONT_RESOLVER_STRATEGY = 'web';

const tokenizeFontsConfig = (
  styledObject?: any,
  { fontsTokens, fontWeightsTokens }: any = {}
) => {
  const { fontFamily, fontWeight } = styledObject;

  if (fontFamily?.startsWith('$')) {
    const fontFamilyValue = fontFamily.slice(1);
    styledObject.fontFamily = fontsTokens?.[fontFamilyValue];
  }
  if (typeof fontWeight === 'string' && fontWeight?.startsWith('$')) {
    const fontWeightValue = fontWeight.slice(1);
    styledObject.fontWeight = fontWeightsTokens?.[fontWeightValue];
  }
};

function resolveVariantFontsConfig(variantProps: any, styledObject: any) {
  let resolvedVariant = {};
  Object.keys(variantProps).forEach((variant) => {
    const variantValue = variantProps[variant];
    const variantObject = styledObject?.variants?.[variant]?.[variantValue];

    resolvedVariant = deepMerge(resolvedVariant, variantObject);
  });

  return resolvedVariant;
}

/* 
  process.env.STYLE_FONT_RESOLVER_STRATEGY= expo | web
  android / ios - font merge logic
  NextJS + web - web logic
  else (assuming it's expo) - Font merge logic
*/

function isExpoStrategy() {
  return !(
    (typeof window !== 'undefined' && //@ts-ignore
      window.next) ||
    process.env.STYLE_FONT_RESOLVER_STRATEGY === STYLE_FONT_RESOLVER_STRATEGY ||
    process.env.REACT_APP_STYLE_FONT_RESOLVER_STRATEGY ===
      STYLE_FONT_RESOLVER_STRATEGY ||
    process.env.STORYBOOK_STYLE_FONT_RESOLVER_STRATEGY ===
      STYLE_FONT_RESOLVER_STRATEGY ||
    process.env.NEXT_PUBLIC_STORYBOOK_STYLE_FONT_RESOLVER_STRATEGY ===
      STYLE_FONT_RESOLVER_STRATEGY
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
      const regex = /^([^_]*_){1,2}[^_]*$/;

      if (style.fontFamily.match(regex)) {
        delete style.fontWeight;
        delete style.fontStyle;

        return;
      }
      let fontFamilyValue = style.fontFamily
        .replace(/ /g, '')
        .replace(/^\w/, (c: any) => c.toUpperCase());

      if (style.fontWeight) {
        fontFamilyValue = `${fontFamilyValue}_${style.fontWeight}`;
        if (typeof style.fontWeight === 'string') {
          fontFamilyValue = `${fontFamilyValue}${
            fontWeights[style.fontWeight]
          }`;
        } else if (typeof style.fontWeight === 'number') {
          const fontWeightString = fontWeights[style.fontWeight];
          fontFamilyValue = `${fontFamilyValue}${fontWeightString}`;
        }
      } else {
        fontFamilyValue = `${fontFamilyValue}_400Regular`;
      }
      if (
        style.fontStyle &&
        style.fontStyle !== 'normal' &&
        typeof style.fontStyle === 'string'
      ) {
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
    this.#fontFamily = {};
    this.#fontFamilyTokenConfig = {};
    this.#fontWeightsTokenConfig = {};
  }

  inputMiddleWare(
    styledObj: any = {},
    shouldUpdate: boolean = true,
    _?: boolean,
    Component?: React.ComponentType,
    componentStyleConfig?: any
  ) {
    const uniqueComponentId = componentStyleConfig?.uniqueComponentId;

    const ignoreKeys = new Set();
    const modifiedStyledObject = this.fontHandler(
      styledObj,
      ignoreKeys,
      shouldUpdate,
      {},
      [uniqueComponentId]
    );

    if (shouldUpdate) {
      return [styledObj, shouldUpdate, _, Component, ignoreKeys];
    }

    return [modifiedStyledObject, shouldUpdate, _, Component, ignoreKeys];
  }

  #fontFamily: any;

  #fontFamilyTokenConfig: any = {};

  #fontWeightsTokenConfig: any = {};

  fontHandler(
    styledObject: any = {},
    ignoreKeys: Set<any>,
    shouldUpdate: boolean,
    fontStyleObject: any = {},
    keyPath: string[] = []
  ) {
    for (const styledObjectKey in styledObject) {
      if (typeof styledObject[styledObjectKey] === 'object') {
        keyPath.push(styledObjectKey);

        this.fontHandler(
          styledObject[styledObjectKey],
          ignoreKeys,
          shouldUpdate,
          fontStyleObject,
          keyPath
        );
        keyPath.pop();
      } else if (shouldUpdate) {
        if (styledObjectKey === 'fontFamily') {
          ignoreKeys.add(styledObjectKey);

          this.#fontFamily = setObjectKeyValue(
            this.#fontFamily,
            [...keyPath, styledObjectKey],
            styledObject[styledObjectKey]
          );
          delete styledObject[styledObjectKey];
        }
        if (styledObjectKey === 'fontWeight') {
          ignoreKeys.add(styledObjectKey);
          this.#fontFamily = setObjectKeyValue(
            this.#fontFamily,
            [...keyPath, styledObjectKey],
            styledObject[styledObjectKey]
          );
          delete styledObject[styledObjectKey];
        }
        if (styledObjectKey === 'fontStyle') {
          ignoreKeys.add(styledObjectKey);
          this.#fontFamily = setObjectKeyValue(
            this.#fontFamily,
            [...keyPath, styledObjectKey],
            styledObject[styledObjectKey]
          );
          delete styledObject[styledObjectKey];
        }
      } else if (styledObjectKey === 'fontFamily') {
        ignoreKeys.add(styledObjectKey);
        tokenizeFontsConfig(styledObject, {
          fontsTokens: this.#fontFamilyTokenConfig,
          fontWeightsTokens: this.#fontWeightsTokenConfig,
        });

        if (styledObject[styledObjectKey]) {
          this.mapFonts(styledObject);
        }
      }
    }

    return styledObject;
  }

  componentMiddleWare({
    Component: InputComponent,
    extendedConfig,
    componentStyleConfig,
  }: any) {
    const styledConfig =
      this.#fontFamily?.[componentStyleConfig?.uniqueComponentId];

    const OutputComponent = React.forwardRef((props: any, ref: any) => {
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

      const { variantProps, restProps } = getVariantProps(props, styledConfig);

      const variantStyledObject = resolveVariantFontsConfig(
        variantProps,
        styledConfig
      );
      const styledConfigWithoutVariant = deepClone(styledConfig ?? {});

      delete styledConfigWithoutVariant.variants;

      let componentStyledObject = deepMerge(
        styledConfigWithoutVariant,
        variantStyledObject
      );

      const { sx, fontWeight, fontFamily, fontStyle, ...rest } = restProps;

      if (fontWeight || componentStyledObject.fontWeight) {
        componentStyledObject.fontWeight =
          fontWeight ?? componentStyledObject.fontWeight;
      }

      if (fontFamily || componentStyledObject.fontFamily) {
        componentStyledObject.fontFamily =
          fontFamily ?? componentStyledObject.fontFamily;
      }

      if (fontStyle || componentStyledObject.fontStyle) {
        componentStyledObject.fontStyle =
          fontStyle ?? componentStyledObject.fontStyle;
      }

      const sxPropsWithThemeProps = deepMerge(componentStyledObject, sx);

      const [resolvedSxProps, , ,] = this.inputMiddleWare(
        sxPropsWithThemeProps,
        false,
        false,
        () => <></>
      );

      let style = rest?.style;

      if (resolvedSxProps.fontFamily) {
        if (Object.keys(resolvedSxProps).length > 0) {
          if (Array.isArray(style)) {
            style = StyleSheet.flatten(style);

            Object.keys(resolvedSxProps).forEach((ele) => {
              style[ele] = resolvedSxProps[ele];
            });
          } else {
            Object.keys(resolvedSxProps).forEach((ele) => {
              style[ele] = resolvedSxProps[ele];
            });
          }
        }
      }

      return <InputComponent {...rest} style={style} ref={ref} />;
    });

    //@ts-ignore
    OutputComponent.styled = {};
    //@ts-ignore
    OutputComponent.styled.config = {};
    //@ts-ignore
    OutputComponent.styled.config = {
      ...styledConfig?.config,
      ...InputComponent?.styled?.config,
    };

    //@ts-ignore
    OutputComponent.isStyledComponent = InputComponent?.isStyledComponent;
    //@ts-ignore
    OutputComponent.isComposedComponent = InputComponent?.isComposedComponent;
    //@ts-ignore
    OutputComponent.isAnimatedComponent = InputComponent?.isAnimatedComponent;

    OutputComponent.displayName = InputComponent?.displayName;

    return OutputComponent;
  }
}
