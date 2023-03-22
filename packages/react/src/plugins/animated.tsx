import React, { useMemo } from 'react';
import type { IStyled, IStyledPlugin } from '../createStyled';
import { deepMerge, deepMergeObjects, setObjectKeyValue } from '../utils';
import { AnimatePresence } from '@legendapp/motion';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';
import { resolvedTokenization } from '../utils';

function tokenizeAnimationPropsFromConfig(
  props: any = {},
  config: any,
  animationAliases: any,
  path: any = [],
  tokenizedAnimatedProps: any = {}
) {
  for (const prop in props) {
    if (animationAliases[prop]) {
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

export class AnimationResolver implements IStyledPlugin {
  name: 'AnimationResolver';
  styledUtils: IStyled | undefined = {
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
    },
  };

  register(styledUtils: any) {
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

  constructor(styledUtils?: IStyled) {
    this.register(styledUtils);
    this.name = 'AnimationResolver';
  }

  #childrenExitPropsMap: any = {};

  #extendedConfig: any = {};

  inputMiddleWare(styledObj: any = {}, shouldUpdateConfig: any = true) {
    // this.#childrenExitPropsMap = deepClone(styledObj);

    delete styledObj?.DEBUG;

    const resolvedAnimatedProps = this.updateStyledObject(
      styledObj,
      shouldUpdateConfig
    );
    const resolvedStyledObjectWithAnimatedProps = deepMergeObjects(
      resolvedAnimatedProps,
      styledObj
    );

    if (shouldUpdateConfig) {
      return styledObj;
    }

    return resolvedStyledObjectWithAnimatedProps;
  }

  updateStyledObject(
    styledObject: any = {},
    shouldUpdateConfig: boolean,
    resolvedStyledObject: any = {},
    keyPath: string[] = []
  ) {
    const aliases = this.styledUtils?.aliases;
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

      if (aliases && aliases?.[prop]) {
        if (shouldUpdateConfig) {
          this.#childrenExitPropsMap[prop] = styledObject[prop];
        }
        const value = styledObject[prop];
        keyPath.push('props', aliases[prop]);
        setObjectKeyValue(resolvedStyledObject, keyPath, value);
        keyPath.pop();
        keyPath.pop();
        delete styledObject[prop];
      }
    }

    return resolvedStyledObject;
  }

  componentMiddleWare({ NewComp, extendedConfig }: any) {
    const styledConfig = this.#childrenExitPropsMap;

    this.#childrenExitPropsMap = {};

    const Component = React.forwardRef((props: any, ref: any) => {
      const { sx, ...restProps } = props;

      const styledContext = useStyled();
      const CONFIG = useMemo(
        () => ({
          ...styledContext.config,
          propertyTokenMap,
        }),
        [styledContext.config]
      );
      this.#extendedConfig = CONFIG;
      if (extendedConfig) {
        this.#extendedConfig = deepMerge(CONFIG, extendedConfig);
      }

      let tokenizedAnimatedProps: any = {};
      const componentStyledObject = styledConfig;

      const animationAliases = this.styledUtils?.aliases;

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

      const resolvedAnimatedStyledWithStyledObject = this.inputMiddleWare(
        mergedAnimatedProps,
        false
      );

      let isState = false;

      Object.keys(restProps?.states ?? {}).forEach((state: any) => {
        isState = restProps.states[state] ? true : false;
      });

      const animatedProps = !isState
        ? resolvedAnimatedStyledWithStyledObject?.props
        : {};

      return (
        <NewComp
          {...animatedProps}
          sx={resolvedAnimatedStyledWithStyledObject}
          {...restProps}
          ref={ref}
        />
      );
    });

    //@ts-ignore
    Component.styled = {};
    //@ts-ignore
    Component.styled.config = {};
    //@ts-ignore
    Component.styled.config = styledConfig;

    Component.displayName = 'DankStyledComponent';

    return Component;
  }

  wrapperComponentMiddleWare() {
    const AnimatedPresenceComp = React.forwardRef(
      ({ children, ...props }: any) => {
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
          if (child?.type?.displayName === 'DankStyledComponent') {
            let tokenizedAnimatedProps: any = {};
            const componentStyledObject = child?.type?.styled?.config;
            const animationAliases = this.styledUtils?.aliases;

            const config = CONFIG;

            if (child.type.styled.resolvedProps) {
              tokenizedAnimatedProps = child?.type?.styled?.resolvedProps;
            } else {
              tokenizedAnimatedProps = tokenizeAnimationPropsFromConfig(
                componentStyledObject,
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
              ...mergedAnimatedProps,
              exit: mergedAnimatedProps?.[':exit'],
              ...child?.props,
            });
            clonedChildren.push(clonedChild);
          } else {
            clonedChildren.push(child);
          }
        });

        return <AnimatePresence {...props}>{clonedChildren}</AnimatePresence>;
      }
    );

    AnimatedPresenceComp.displayName = `AnimatePresence`;

    return AnimatedPresenceComp;
  }
}
