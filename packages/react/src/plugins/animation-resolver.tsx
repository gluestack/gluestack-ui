import React, { useEffect, useMemo } from 'react';
import type { IAnimationDriverPlugin, IStyledPlugin } from '../types';
import { useStyled } from '../StyledProvider';
import {
  deepMerge,
  deepMergeObjects,
  setObjectKeyValue,
  resolvedTokenization,
} from '../utils';
import { propertyTokenMap } from '../propertyTokenMap';

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
    aliases: {} as const,
    tokens: {} as const,
  };

  AnimatePresenceComp = React.Fragment;

  register(config: any) {
    if (this.config) {
      this.config.aliases = {
        ...this.config?.aliases,
        ...config?.aliases,
      };

      this.config.tokens = {
        ...this.config?.tokens,
        ...config?.tokens,
      };

      // @ts-ignore
      this.config.ref = config?.ref;
    }
  }

  constructor(ComponentDriverClass: IAnimationDriverPlugin, config: any = {}) {
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
        AnimatedComponent = React.Fragment;
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

      if (shouldUpdateConfig) {
        // @ts-ignore
        return [styledObj, shouldUpdateConfig, _, AnimatedComponent];
      }

      return [
        resolvedStyledObjectWithAnimatedProps,
        shouldUpdateConfig,
        _,
        AnimatedComponent,
      ];
    }
    return [styledObj, shouldUpdateConfig, _, Component];
  }

  updateStyledObject(
    styledObject: any = {},
    shouldUpdateConfig: boolean,
    resolvedStyledObject: any = {},
    keyPath: string[] = []
  ) {
    const aliases = this.config?.aliases;
    for (const prop in styledObject) {
      if (typeof styledObject[prop] === 'object') {
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
      if (aliases && aliases?.[prop]) {
        if (shouldUpdateConfig) {
          // this.#childrenExitPropsMap[prop] = styledObject[prop];
          setObjectKeyValue(
            this.#childrenExitPropsMap,
            [...keyPath, prop],
            styledObject[prop]
          );
        }
        const value = styledObject[prop];
        // @ts-ignore
        keyPath.push('props', aliases[prop]);
        setObjectKeyValue(resolvedStyledObject, keyPath, value);
        keyPath.pop();
        keyPath.pop();
        delete styledObject[prop];
      }
    }
    return resolvedStyledObject;
  }

  componentMiddleWare({ Component, ExtendedConfig }: any) {
    if (Component && Component.isAnimatedComponent) {
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
        return (
          <Component
            {...animatedProps}
            sx={resolvedAnimatedStyledWithStyledObject}
            {...restProps}
            ref={ref}
          />
        );
      });

      if (NewComponent) {
        //@ts-ignore
        NewComponent.styled = {};
        //@ts-ignore
        NewComponent.styled.config = {};
        //@ts-ignore
        NewComponent.styled.config = styledConfig;

        //@ts-ignore
        NewComponent.isStyledComponent = Component?.isStyledComponent;
        //@ts-ignore
        NewComponent.isComposedComponent = Component?.isComposedComponent;

        NewComponent.displayName = 'StyledComponent';
        return NewComponent;
      }
    } else {
      return Component;
    }
  }

  wrapperComponentMiddleWare(Component: React.ComponentType) {
    if (
      Component &&
      Component.displayName?.startsWith('Gluestack-AnimatedResolver-Animated')
    ) {
      const AnimatedPresenceComp = React.forwardRef(
        ({ children, ...props }: any, ref?: any) => {
          const clonedChildren: any = [];
          const styledContext = useStyled();
          const CONFIG = useMemo(
            () => ({
              ...styledContext.config,
              propertyTokenMap,
            }),
            [styledContext.config]
          );

          this.#extendedConfig = CONFIG;

          React.Children.toArray(children).forEach((child: any) => {
            if (child?.type?.displayName === 'StyledComponent') {
              let tokenizedAnimatedProps: any = {};
              const animationAliases = this.config?.aliases;

              const componentStyledObject = child?.type?.styled?.config;
              const { variantProps, restProps } = getVariantProps(
                child?.props,
                componentStyledObject
              );

              const config = CONFIG;

              if (child.type.styled.resolvedProps) {
                tokenizedAnimatedProps = child?.type?.styled?.resolvedProps;
              } else {
                const variantStyledObject = resolveVariantAnimationProps(
                  variantProps,
                  componentStyledObject
                );
                const componentStyledObjectWithVariants = deepMergeObjects(
                  componentStyledObject,
                  variantStyledObject
                );
                tokenizedAnimatedProps = tokenizeAnimationPropsFromConfig(
                  componentStyledObjectWithVariants,
                  config,
                  animationAliases
                );

                child.type.styled.resolvedProps = tokenizedAnimatedProps;
              }

              const tokenizedSxAnimationProps: any =
                tokenizeAnimationPropsFromConfig(
                  child?.props?.sx,
                  config,
                  animationAliases
                );

              const mergedAnimatedProps = deepMergeObjects(
                {},
                tokenizedSxAnimationProps,
                tokenizedAnimatedProps
              );

              const clonedChild = React.cloneElement(child, {
                exit: mergedAnimatedProps?.[':exit'],
                ...restProps,
              });
              clonedChildren.push(clonedChild);
            } else {
              clonedChildren.push(child);
            }
          });

          return (
            <this.AnimatePresenceComp ref={ref} {...props}>
              {clonedChildren}
            </this.AnimatePresenceComp>
          );
        }
      );
      AnimatedPresenceComp.displayName = `AnimatePresence`;

      return {
        Component: AnimatedPresenceComp,
        AnimatePresence: AnimatedPresenceComp,
      };
    } else {
      return {
        Component: React.Fragment,
        AnimatePresence: React.Fragment,
      };
    }
  }
}
