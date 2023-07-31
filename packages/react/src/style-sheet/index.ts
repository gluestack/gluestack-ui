// import { Platform, StyleSheet } from 'react-native';
import { injectInStyle } from '../injectInStyle';
import {
  getComponentResolvedBaseStyle,
  getComponentResolvedVariantStyle,
  getDescendantResolvedBaseStyle,
  getDescendantResolvedVariantStyle,
  // getStyleIds,
  styledResolvedToOrderedSXResolved,
  styledToStyledResolved,
  StyledValueToCSSObject,
} from '../resolver';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from '../types';
import { INTERNAL_updateCSSStyleInOrderedResolved } from '../updateCSSStyleInOrderedResolved';
import { getCSSIdAndRuleset } from '../updateCSSStyleInOrderedResolved.web';
import { deepMerge, resolveTokensFromConfig } from '../utils';
import { inject } from '../utils/css-injector';
import { value } from './value';
export type DeclarationType = 'boot' | 'forwarded';
export class StyleInjector {
  #globalStyleMap: any;
  #globalStyleMapTemp: Map<DeclarationType, any> | undefined;
  #stylesMap: any;
  #declaratorMap: any;
  // platform: any;

  constructor() {
    this.#globalStyleMap = new Map();
    this.#globalStyleMapTemp = new Map();
    this.#stylesMap = new Map();
    this.#declaratorMap = new Map();
    // this.platform = Platform.OS;
  }

  declare(
    _wrapperElementId: DeclarationType,
    componentHash: string,
    cssId: string,
    originalTheme: any,
    extednedConfig: any,
    componentStyleConfig: any
  ) {
    let previousStyleMap = new Map();
    if (
      this.#globalStyleMapTemp &&
      this.#globalStyleMapTemp?.get(_wrapperElementId)
    ) {
      previousStyleMap = this.#globalStyleMapTemp.get(_wrapperElementId);
    } else {
      // this.#globalStyleMapTemp = new Map();
    }
    const val = `${componentHash}-${cssId}`;

    const themeData = {
      meta: {
        original: originalTheme,
        extendedConfig: extednedConfig,
        componentStyleConfig: componentStyleConfig,
      },
      value: undefined,
    };

    if (previousStyleMap) {
      const currentThemeMap = previousStyleMap.get(componentHash);

      if (currentThemeMap) {
        currentThemeMap.set(val, themeData);
        previousStyleMap.set(componentHash, currentThemeMap);
      } else {
        previousStyleMap.set(componentHash, new Map().set(val, themeData));
      }
      if (this.#globalStyleMapTemp) {
        this.#globalStyleMapTemp.set(_wrapperElementId, previousStyleMap);
      }
    } else {
      const compHash = new Map();
      if (this.#globalStyleMapTemp) {
        this.#globalStyleMapTemp.set(
          _wrapperElementId,
          compHash.set(componentHash, new Map().set(val, themeData))
        );
      }
    }
  }

  resolve(CONFIG: any) {
    if (this.#globalStyleMapTemp) {
      this.#globalStyleMapTemp.forEach(
        (componentThemeHash: any, key: DeclarationType) => {
          componentThemeHash.forEach(
            (componentThemes: any, componentThemesKey: any) => {
              componentThemes.forEach((componentTheme: any) => {
                const theme = componentTheme?.meta?.original;
                const ExtendedConfig = componentTheme?.meta?.extendedConfig;
                // const componentStyleConfig =
                //   componentTheme?.meta?.componentStyleConfig;

                let componentExtendedConfig = CONFIG;

                if (ExtendedConfig) {
                  componentExtendedConfig = deepMerge(CONFIG, ExtendedConfig);
                }
                const styledResolved = styledToStyledResolved(
                  theme,
                  [],
                  componentExtendedConfig
                );

                const orderedResolved =
                  styledResolvedToOrderedSXResolved(styledResolved);

                INTERNAL_updateCSSStyleInOrderedResolved(
                  orderedResolved,
                  componentThemesKey
                );

                // const styleIds = getStyleIds(
                //   orderedResolved,
                //   componentStyleConfig
                // );
                const componentOrderResolvedBaseStyle =
                  getComponentResolvedBaseStyle(orderedResolved);
                const componentOrderResolvedVariantStyle =
                  getComponentResolvedVariantStyle(orderedResolved);

                const descendantOrderResolvedBaseStyle =
                  getDescendantResolvedBaseStyle(orderedResolved);
                const descendantOrderResolvedVariantStyle =
                  getDescendantResolvedVariantStyle(orderedResolved);

                this.update(
                  componentOrderResolvedBaseStyle,
                  key + '-base',
                  componentThemesKey
                    ? componentThemesKey
                    : 'css-injected-boot-time'
                );
                this.update(
                  descendantOrderResolvedBaseStyle,
                  key + '-descendant-base',
                  componentThemesKey
                    ? componentThemesKey
                    : 'css-injected-boot-time-descendant'
                );
                this.update(
                  componentOrderResolvedVariantStyle,
                  key + '-variant',
                  componentThemesKey
                    ? componentThemesKey
                    : 'css-injected-boot-time'
                );
                this.update(
                  descendantOrderResolvedVariantStyle,
                  key + '-descendant-variant',
                  componentThemesKey
                    ? componentThemesKey
                    : 'css-injected-boot-time-descendant'
                );
              });
            }
          );
        }
      );
      this.#globalStyleMapTemp = undefined;
      console.log(this.#globalStyleMap, '---------GLOBAL STYLE MAP-------');
    }
  }

  update(
    orderedSXResolved: OrderedSXResolved,
    _wrapperElementId: string,
    _styleTagId: any = 'css-injected-boot-time'
  ) {
    let previousStyleMap: any = new Map();
    let themeMap = new Map();

    if (this.#globalStyleMap.get(_wrapperElementId)) {
      previousStyleMap = this.#globalStyleMap.get(_wrapperElementId);
    }

    if (previousStyleMap) {
      if (themeMap.get(_styleTagId))
        themeMap = previousStyleMap.get(_styleTagId);
    }

    orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
      const styleData: any = {
        meta: {
          queryCondition: styleResolved?.meta?.queryCondition,
        },
      };

      // if (this.platform === 'web') {
      styleData.value = value(styleResolved); //?.meta?.cssRuleset;
      // } else {
      //   styleData.value = StyleSheet.create({
      //     [styleResolved.meta.cssId]: styleResolved?.resolved as any,
      //   });
      // }
      const val = `${styleResolved.meta.cssId}`;

      themeMap.set(val, styleData);
      this.#stylesMap.set(styleResolved.meta.cssId, styleData);
    });

    if (themeMap.size > 0) previousStyleMap.set(_styleTagId, themeMap);

    if (previousStyleMap.size > 0)
      this.#globalStyleMap.set(_wrapperElementId, previousStyleMap);
  }

  temp(
    orderedSXResolved: OrderedSXResolved,
    _wrapperElementId: string,
    _styleTagId: any = 'css-injected-boot-time',
    extendedConfig?: any
    // shouldResolve: any = false,
    // CONFIG: any = {}
  ) {
    let previousStyleMap: any = new Map();
    let themeMap = new Map();

    if (this.#declaratorMap.get(_wrapperElementId)) {
      previousStyleMap = this.#declaratorMap.get(_wrapperElementId);
    }

    if (previousStyleMap) {
      if (themeMap.get(_styleTagId))
        themeMap = previousStyleMap.get(_styleTagId);
    }

    orderedSXResolved.forEach((styleResolved: StyledValueResolvedWithMeta) => {
      const val = `${styleResolved.meta.cssId}`;

      themeMap.set(val, { ...styleResolved, extendedConfig: extendedConfig });
      this.#stylesMap.set(styleResolved.meta.cssId, {
        meta: {
          queryCondition: styleResolved?.meta?.queryCondition,
        },
        value: styleResolved?.resolved,
      });
    });

    if (themeMap.size > 0) previousStyleMap.set(_styleTagId, themeMap);

    if (previousStyleMap.size > 0)
      this.#declaratorMap.set(_wrapperElementId, previousStyleMap);

    // if (!shouldResolve) {
    //   this.resolveTemp(CONFIG, shouldResolve);
    // }
  }

  resolveTemp(CONFIG: any) {
    if (this.#declaratorMap) {
      this.#declaratorMap.forEach(
        (componentThemeHash: any, _wrapperElementType: any) => {
          componentThemeHash.forEach(
            (componentThemes: any, componentHashKey: any) => {
              // let toBeInjectedCssRules = '';
              componentThemes.forEach((componentTheme: any) => {
                const theme = componentTheme?.original;
                const ExtendedConfig = componentTheme?.extendedConfig;

                let componentExtendedConfig = CONFIG;

                if (ExtendedConfig) {
                  componentExtendedConfig = deepMerge(CONFIG, ExtendedConfig);
                }

                componentTheme.resolved = StyledValueToCSSObject(
                  theme,
                  componentExtendedConfig
                );

                delete componentTheme.meta.cssRuleset;

                if (componentTheme?.meta?.queryCondition) {
                  const queryCondition = resolveTokensFromConfig(CONFIG, {
                    condition: componentTheme?.meta?.queryCondition,
                  }).condition;

                  componentTheme.meta.queryCondition = queryCondition;
                }

                const cssData: any = getCSSIdAndRuleset(
                  componentTheme,
                  componentHashKey
                );

                componentTheme.meta.cssRuleset = cssData.rules.style;

                this.#stylesMap.set(componentTheme.meta.cssId, {
                  meta: {
                    queryCondition: componentTheme?.meta?.queryCondition,
                  },
                  value: componentTheme?.resolved,
                });

                // toBeInjectedCssRules += componentTheme.meta.cssRuleset;
              });

              // this.inject(
              //   toBeInjectedCssRules,
              //   _wrapperElementType,
              //   componentHashKey
              // );
            }
          );
        }
      );
    }
  }

  getStyleMap() {
    return this.#stylesMap;
  }

  inject(cssRuleset: any, _wrapperType: any, _styleTagId: any) {
    if (cssRuleset) {
      inject(`@media screen {${cssRuleset}}`, _wrapperType as any, _styleTagId);
    }
  }

  injectInStyle() {
    const styleSheetInjectInStyle = injectInStyle.bind(this);

    styleSheetInjectInStyle(this.#declaratorMap);
  }
}

const stylesheet = new StyleInjector();
export const GluestackStyleSheet = stylesheet;
