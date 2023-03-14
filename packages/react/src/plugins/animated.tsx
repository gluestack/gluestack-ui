import React, { useMemo } from 'react';
import type { IStyled, IStyledPlugin } from '../createStyled';
import { deepMerge, deepMergeObjects, setObjectKeyValue } from '../utils';
import { AnimatePresence } from '@legendapp/motion';
import { useStyled } from '../StyledProvider';
import { propertyTokenMap } from '../propertyTokenMap';

export class AnimationResolver implements IStyledPlugin {
  name: 'AnimationResolver';
  styledUtils: IStyled | undefined = {
    aliases: {
      ':animate': 'animate',
      ':initial': 'initial',
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

  childrenExitPropsMap: any = {};

  childrenCount: any = 0;

  extendedConfig: any = {};

  inputMiddleWare(styledObj: any = {}) {
    this.childrenExitPropsMap = { ...styledObj };

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
    const Component = React.forwardRef((props: any, ref: any) => {
      const { sx, ...restProps } = props;
      const resolvedAnimatedStyledWithStyledObject = this.inputMiddleWare(sx);

      const styledContext = useStyled();
      const CONFIG = useMemo(
        () => ({
          ...styledContext.config,
          propertyTokenMap,
        }),
        [styledContext.config]
      );
      this.extendedConfig = CONFIG;
      if (extendedConfig) {
        this.extendedConfig = deepMerge(CONFIG, extendedConfig);
      }

      return (
        <NewComp
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
    Component.styled.config = this.childrenExitPropsMap;
    this.childrenCount++;

    return Component;
  }

  wrapperComponentMiddleWare() {
    const AnimatedPresenceComp = React.forwardRef(
      ({ children, ...props }: any) => {
        const clonedChildren: any = [];

        React.Children.toArray(children).forEach((child: any) => {
          const sxExitProp = child?.props?.sx?.[':exit'];
          let finalExitProp = child?.type?.styled?.config[':exit'];

          if (sxExitProp) {
            finalExitProp = {
              ...child?.type?.styled?.config[':exit'],
              ...sxExitProp,
            };
          }

          const clonedChild = React.cloneElement(child, {
            exit: { ...finalExitProp, ...child?.props?.exit },
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
