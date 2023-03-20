import React, { useMemo } from 'react';
import type { IStyled, IStyledPlugin } from '../createStyled';
import { deepMerge, deepMergeObjects, setObjectKeyValue } from '../utils';
import { AnimatePresence } from '@legendapp/motion';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';
import { resolvedTokenization } from '../utils';
import { deepClone } from '../utils/cssify/utils/common';

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

  inputMiddleWare(styledObj: any = {}) {
    this.#childrenExitPropsMap = deepClone(styledObj);

    if (Object.keys(this.#extendedConfig).length === 0) {
      return {};
    }

    const resolvedAnimatedProps = this.updateStyledObject(styledObj);
    const resolvedStyledObjectWithAnimatedProps = deepMergeObjects(
      resolvedAnimatedProps,
      styledObj
    );

    return resolvedStyledObjectWithAnimatedProps;
  }

  updateStyledObject(
    styledObject: any = {},
    resolvedStyledObject: any = {},
    keyPath: string[] = []
  ) {
    const aliases = this.styledUtils?.aliases;
    for (const prop in styledObject) {
      if (typeof styledObject[prop] === 'object') {
        keyPath.push(prop);
        this.updateStyledObject(
          styledObject[prop],
          resolvedStyledObject,
          keyPath
        );
        keyPath.pop();
      }

      if (aliases && aliases[prop]) {
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

      const resolvedAnimatedStyledWithStyledObject =
        this.inputMiddleWare(mergedAnimatedProps);

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
    Component.styled.config = this.#childrenExitPropsMap;

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
        });

        return <AnimatePresence {...props}>{clonedChildren}</AnimatePresence>;
      }
    );

    AnimatedPresenceComp.displayName = `AnimatePresence`;

    return AnimatedPresenceComp;
  }
}
