import React from 'react';
import type { IStyled, IStyledPlugin } from '../createStyled';
import { deepMergeObjects, setObjectKeyValue } from '../utils';

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
    // this.styledUtils = styledUtils;
  }

  constructor(styledUtils: IStyled) {
    this.register(styledUtils);
    this.name = 'AnimationResolver';
  }

  inputMiddleWare(styledObj: any = {}) {
    const resolvedAnimatedProps = this.updateStyledObject(styledObj);
    const resolvedStyledObjectWithAnimatedProps = deepMergeObjects(
      resolvedAnimatedProps,
      styledObj
    );

    // console.log(resolvedStyledObjectWithAnimatedProps, 'styled#######');

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

  componentMiddleWare({ NewComp }: any) {
    return React.forwardRef((props: any, ref: any) => {
      const { sx, ...restProps } = props;
      const resolvedAnimatedStyledWithStyledObject = this.inputMiddleWare(sx);

      return (
        <NewComp
          sx={resolvedAnimatedStyledWithStyledObject}
          {...restProps}
          ref={ref}
        />
      );
    });
  }
}
