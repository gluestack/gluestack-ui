import { injectInStyle } from '../injectInStyle';
import { StyledValueToCSSObject } from '../resolver';
import type { OrderedSXResolved, StyledValueResolvedWithMeta } from '../types';
import { getCSSIdAndRuleset } from '../updateCSSStyleInOrderedResolved.web';
import { deepMerge, resolveTokensFromConfig } from '../utils';
import { inject } from '../utils/css-injector';
export type DeclarationType = 'boot' | 'forwarded';
export class StyleInjector {
  #stylesMap: any;
  #globalStyleMap: any;

  constructor() {
    this.#stylesMap = new Map();
    this.#globalStyleMap = new Map();
  }

  declare(
    orderedSXResolved: OrderedSXResolved,
    _wrapperElementId: string,
    _styleTagId: any = 'css-injected-boot-time',
    extendedConfig?: any,
    resolve: boolean = false
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
      const val = `${styleResolved.meta.cssId}`;

      themeMap.set(val, { ...styleResolved, extendedConfig: extendedConfig });

      if (resolve) {
        this.#stylesMap.set(styleResolved.meta.cssId, {
          meta: {
            queryCondition: styleResolved?.meta?.queryCondition,
          },
          value: styleResolved?.resolved,
        });
      }
    });

    if (themeMap.size > 0) previousStyleMap.set(_styleTagId, themeMap);

    if (previousStyleMap.size > 0)
      this.#globalStyleMap.set(_wrapperElementId, previousStyleMap);

    // console.log('\n>>>>> declare >>>>>', this.#globalStyleMap);

    // if (!shouldResolve) {
    //   this.resolveTemp(CONFIG, shouldResolve);
    // }
  }

  resolveByOrderResolved(
    orderResolved: any,
    _wrapperElementType: any,
    _wrapperElementId: any,
    ExtendedConfig: any,
    CONFIG: any,
    shouldResolve: any = true
  ) {
    let toBeInjectedCssRules = '';
    let componentExtendedConfig = CONFIG;

    if (shouldResolve && ExtendedConfig) {
      componentExtendedConfig = deepMerge(CONFIG, ExtendedConfig);
    }

    orderResolved.forEach((styledResolved: any) => {
      if (shouldResolve) {
        const theme = styledResolved?.original;
        this.resolveComponentTheme(
          styledResolved,
          theme,
          componentExtendedConfig,
          _wrapperElementId,
          CONFIG
        );
        delete styledResolved.original;
      }
      this.#stylesMap.set(styledResolved.meta.cssId, {
        meta: {
          queryCondition: styledResolved?.meta?.queryCondition,
        },
        value: styledResolved?.resolved,
      });
      this.updateMap(_wrapperElementType, _wrapperElementId, styledResolved);
      toBeInjectedCssRules += styledResolved.meta.cssRuleset;
    });

    this.injectStyles(
      toBeInjectedCssRules,
      _wrapperElementType,
      _wrapperElementId
    );
  }

  updateMap(
    _wrapperElementType: any,
    _wrapperElementId: any,
    styleResolved: any
  ) {
    let previousStyleMap: any = new Map();
    let themeMap = new Map();

    if (this.#globalStyleMap.get(_wrapperElementType)) {
      previousStyleMap = this.#globalStyleMap.get(_wrapperElementType);
    }

    if (previousStyleMap) {
      if (themeMap.get(_wrapperElementId))
        themeMap = previousStyleMap.get(_wrapperElementId);
    }

    themeMap.delete(styleResolved.meta.cssId);
    themeMap.set(styleResolved.meta.cssId, styleResolved);

    if (themeMap.size > 0) previousStyleMap.set(_wrapperElementId, themeMap);

    if (previousStyleMap.size > 0)
      this.#globalStyleMap.set(_wrapperElementType, previousStyleMap);
  }

  resolveComponentTheme(
    componentTheme: any,
    theme: any,
    componentExtendedConfig: any,
    componentHashKey: any,
    CONFIG: any
  ) {
    componentTheme.resolved = StyledValueToCSSObject(
      theme,
      componentExtendedConfig
    );

    delete componentTheme.meta.cssRuleset;

    if (componentTheme.meta && componentTheme.meta.queryCondition) {
      const queryCondition = resolveTokensFromConfig(CONFIG, {
        condition: componentTheme.meta.queryCondition,
      })?.condition;

      componentTheme.meta.queryCondition = queryCondition;
    }

    const cssData: any = getCSSIdAndRuleset(componentTheme, componentHashKey);

    componentTheme.meta.cssRuleset = cssData.rules.style;
  }

  resolve(CONFIG: any) {
    if (this.#globalStyleMap) {
      this.#globalStyleMap.forEach(
        (componentThemeHash: any, _wrapperElementType: any) => {
          componentThemeHash.forEach(
            (componentThemes: any, componentHashKey: any) => {
              componentThemes.forEach((componentTheme: any) => {
                const theme = componentTheme?.original;
                const ExtendedConfig = componentTheme?.extendedConfig;

                let componentExtendedConfig = CONFIG;

                if (ExtendedConfig) {
                  componentExtendedConfig = deepMerge(CONFIG, ExtendedConfig);
                }

                this.resolveComponentTheme(
                  componentTheme,
                  theme,
                  componentExtendedConfig,
                  componentHashKey,
                  CONFIG
                );

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

  injectStyles(cssRuleset: any, _wrapperType: any, _styleTagId: any) {
    if (cssRuleset) {
      inject(`@media screen {${cssRuleset}}`, _wrapperType as any, _styleTagId);
    }
  }

  injectInStyle() {
    const styleSheetInjectInStyle = injectInStyle.bind(this);

    styleSheetInjectInStyle(this.#globalStyleMap);
  }
}

const stylesheet = new StyleInjector();
export const GluestackStyleSheet = stylesheet;
