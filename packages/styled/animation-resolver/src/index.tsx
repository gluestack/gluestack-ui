import React, { useEffect, useMemo } from 'react';
import type {
  // @ts-ignore
  IAnimationDriverPlugin,
  IStyledPlugin,
} from '@gluestack-style/react';
import { useStyled } from '@gluestack-style/react';
import { deepMerge, setObjectKeyValue, resolvedTokenization } from './utils';
import { propertyTokenMap } from './propertyTokenMap';

function tokenizeAnimationPropsFromConfig(
  props: any = {},
  config: any,
  animationAliases: any,
  path: any = [],
  tokenizedAnimatedProps: any = {}
) {
  for (const prop in props) {
    if (Array.isArray(props[prop])) {
      path.push(prop);
      setObjectKeyValue(tokenizedAnimatedProps, path, props[prop]);
      path.pop();
    } else if (animationAliases[prop]) {
      path.push(prop);
      const tokenizedValue = resolvedTokenization(props[prop], config);
      setObjectKeyValue(tokenizedAnimatedProps, path, tokenizedValue);
      path.pop();
    } else if (typeof props[prop] === 'object') {
      path.push(prop);
      const tokenizedValue = resolvedTokenization(props[prop], config);
      setObjectKeyValue(tokenizedAnimatedProps, path, tokenizedValue);
      // path.pop();
      tokenizeAnimationPropsFromConfig(
        props[prop],
        config,
        animationAliases,
        path,
        tokenizedAnimatedProps
      );
      path.pop();
    } else {
      path.push(prop);
      setObjectKeyValue(tokenizedAnimatedProps, path, props[prop]);
      path.pop();
    }
  }

  return tokenizedAnimatedProps;
}

function getVariantProps(props: any, theme: any) {
  const variantTypes = theme?.variants ? Object.keys(theme.variants) : [];

  const restProps = { ...props };

  const variantProps: any = {};
  variantTypes?.forEach((variant) => {
    if (props[variant]) {
      variantProps[variant] = props[variant];
      // delete restProps[variant];
    }
  });

  return {
    variantProps,
    restProps,
  };
}

function resolveVariantAnimationProps(variantProps: any, styledObject: any) {
  let resolvedVariant = {};
  Object.keys(variantProps).forEach((variant) => {
    const variantValue = variantProps[variant];
    const variantObject = styledObject?.variants?.[variant]?.[variantValue];

    resolvedVariant = deepMerge(resolvedVariant, variantObject);
  });

  return resolvedVariant;
}

export class AnimationResolver implements IStyledPlugin {
  name: 'AnimationResolver';
  componentDriver: IAnimationDriverPlugin;
  config = {
    aliases: {
      ':animate': 'animate',
      ':initial': 'initial',
      ':exit': 'exit',
      ':initialProps': 'initialProps',
      ':animateProps': 'animateProps',
      ':transition': 'transition',
      ':transformOrigin': 'transformOrigin',
      ':whileTap': 'whileTap',
      ':whileHover': 'whileHover',
      ':onAnimationComplete': 'onAnimationComplete',
    } as const,
    tokens: {} as const,
    animatedPropMap: {} as any,
  };

  AnimatePresenceComp = React.Fragment;

  register(config: any) {
    if (this.config) {
      if (config?.aliases) {
        this.config.aliases = {
          ...this.config?.aliases,
          ...config?.aliases,
        };
      }

      if (config?.tokens) {
        this.config.tokens = {
          ...this.config?.tokens,
          ...config?.tokens,
        };
      }
      if (config?.animatedPropMap) {
        this.config.animatedPropMap = {
          ...this.config?.animatedPropMap,
          ...config?.animatedPropMap,
        };
      }
      // @ts-ignore
      this.config.ref = config?.ref;
    }
  }

  constructor(ComponentDriverClass: any, config: any = {}) {
    // @ts-ignore
    const componentDriver = new ComponentDriverClass(config);
    this.name = 'AnimationResolver';
    this.componentDriver = componentDriver;
    if (componentDriver.engine.AnimatePresence) {
      this.AnimatePresenceComp = componentDriver.engine.AnimatePresence;
    }
    this.register(componentDriver.config);
  }

  #childrenExitPropsMap: any = {};

  #extendedConfig: any = {};

  inputMiddleWare<P>(
    styledObj = {},
    shouldUpdateConfig: any = true,
    _?: boolean,
    Component?: React.ComponentType
  ): {
    // @ts-ignore
    [key in keyof typeof this.config.aliases]: P[(typeof this.config.aliases)[key]];
  } {
    if (
      Component &&
      (Component.displayName?.startsWith(
        'Gluestack-AnimatedResolver-Animated'
      ) ||
        // @ts-ignore
        Component.isAnimatedComponent)
    ) {
      let AnimatedComponent =
        this.componentDriver.engine[
          // @ts-ignore
          Component.displayName?.replace(
            'Gluestack-AnimatedResolver-Animated',
            ''
          )
        ];

      if (AnimatedComponent) {
        AnimatedComponent.isAnimatedComponent = true;
      }
      if (!AnimatedComponent) {
        AnimatedComponent = Component;
      }

      // this.#childrenExitPropsMap = deepClone(styledObj);
      const resolvedAnimatedProps = this.updateStyledObject(
        styledObj,
        shouldUpdateConfig
      );

      const resolvedStyledObjectWithAnimatedProps = deepMerge(
        styledObj,
        resolvedAnimatedProps
      );

      // if (shouldUpdateConfig) {
      //   // @ts-ignore
      //   return [styledObj, shouldUpdateConfig, _, AnimatedComponent];
      // }

      // @ts-ignore

      return [
        resolvedStyledObjectWithAnimatedProps,
        shouldUpdateConfig,
        _,
        AnimatedComponent,
      ];
    }
    // @ts-ignore
    return [styledObj, shouldUpdateConfig, _, Component];
  }

  updateStyledObject(
    styledObject: any = {},
    shouldUpdateConfig: boolean,
    resolvedStyledObject: any = {},
    keyPath: string[] = []
  ) {
    const aliases: any = this.config?.aliases;
    const animatedPropMap = this.config?.animatedPropMap;

    for (const prop in styledObject) {
      if (aliases && aliases?.[prop]) {
        let isStyleKey = false;
        if (shouldUpdateConfig) {
          // this.#childrenExitPropsMap[prop] = styledObject[prop];
          if (keyPath[keyPath.length - 1] === 'style') {
            isStyleKey = true;
            keyPath.pop();
          }
          setObjectKeyValue(
            this.#childrenExitPropsMap,
            [...keyPath, prop],
            styledObject[prop]
          );
        }
        const value = styledObject[prop];

        // @ts-ignore
        keyPath.push('props', aliases[prop]);
        // setObjectKeyValue(resolvedStyledObject, keyPath, value);

        setObjectKeyValue(resolvedStyledObject, keyPath, value);
        keyPath.pop();
        keyPath.pop();
        if (isStyleKey) keyPath.push('style');

        delete styledObject[prop];
      } else if (typeof styledObject[prop] === 'object') {
        keyPath.push(prop);
        this.updateStyledObject(
          styledObject[prop],
          shouldUpdateConfig,
          resolvedStyledObject,
          keyPath
        );
        keyPath.pop();
      }

      // @ts-ignore

      if (animatedPropMap && animatedPropMap[prop]) {
        this.renameObjectKey(styledObject, prop, animatedPropMap[prop]);
      }
    }
    return resolvedStyledObject;
  }

  renameObjectKey(obj: any, from: string, to: string) {
    obj[to] = obj[from];
    delete obj[from];
    return obj;
  }

  componentMiddleWare({ Component, ExtendedConfig }: any) {
    if (Component && Component?.isAnimatedComponent) {
      const styledConfig = this.#childrenExitPropsMap;

      this.#childrenExitPropsMap = {};

      const NewComponent = React.forwardRef((props: any, ref?: any) => {
        const { sx, ...rest } = props;

        const styledContext = useStyled();
        useEffect(() => {
          if (!styledContext.animationDriverData) {
            styledContext.setAnimationDriverData(this.componentDriver);
          }
        }, [styledContext]);
        const CONFIG = useMemo(
          () => ({
            ...styledContext.config,
            propertyTokenMap,
          }),
          [styledContext.config]
        );
        this.#extendedConfig = CONFIG;
        if (ExtendedConfig) {
          this.#extendedConfig = deepMerge(CONFIG, ExtendedConfig);
        }

        let tokenizedAnimatedProps: any = {};
        const { variantProps, restProps } = getVariantProps(rest, styledConfig);
        const variantStyledObject = resolveVariantAnimationProps(
          variantProps,
          styledConfig
        );
        const componentStyledObject = deepMerge(
          variantStyledObject,
          styledConfig
        );

        const animationAliases = this.config?.aliases;

        const config = this.#extendedConfig;

        tokenizedAnimatedProps = tokenizeAnimationPropsFromConfig(
          componentStyledObject,
          config,
          animationAliases
        );

        const tokenizedSxAnimationProps: any = tokenizeAnimationPropsFromConfig(
          sx,
          config,
          animationAliases
        );

        const mergedAnimatedProps = deepMerge(
          tokenizedAnimatedProps,
          tokenizedSxAnimationProps
        );

        // @ts-ignore
        const [resolvedAnimatedStyledWithStyledObject, , ,] =
          this.inputMiddleWare(mergedAnimatedProps, false, false, Component);
        let isState = false;

        Object.keys(restProps?.states ?? {}).forEach((state: any) => {
          isState = restProps.states[state] ? true : false;
        });
        const animatedProps = !isState
          ? // @ts-ignore
            resolvedAnimatedStyledWithStyledObject?.props
          : {};

        return <Component {...animatedProps} {...restProps} ref={ref} />;
      });

      if (NewComponent) {
        //@ts-ignore
        NewComponent.styled = {};
        //@ts-ignore
        NewComponent.styled.config = {};

        //@ts-ignore
        NewComponent.styled.config = {
          ...Component?.styled?.config,
          ...styledConfig,
        };
        //@ts-ignore
        NewComponent.isStyledComponent = Component?.isStyledComponent;
        //@ts-ignore
        NewComponent.isComposedComponent = Component?.isComposedComponent;

        NewComponent.displayName = Component?.displayName;

        return NewComponent;
      }
    } else {
      return Component;
    }
  }
}

export * from './AnimatedComponents';
