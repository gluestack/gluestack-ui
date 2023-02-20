import type { IStyled, IStyledPlugin } from '../createStyled';
import { deepMergeObjects, setObjectKeyValue } from '../utils';

export class AnimationResolver implements IStyledPlugin {
  styledUtils: IStyled | undefined = {
    config: {
      ':animate': 'animate',
      ':initial': 'initial',
    },
  };

  register(styledUtils: any) {
    if (this.styledUtils) {
      this.styledUtils.config = {
        ...this.styledUtils?.config,
        ...styledUtils?.config,
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
    const config = this.styledUtils?.config;
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

      if (config && config[prop]) {
        const value = styledObject[prop];
        keyPath.push('props', config[prop]);
        setObjectKeyValue(resolvedStyledObject, keyPath, value);
        keyPath.pop();
        keyPath.pop();
        delete styledObject[prop];
      }
    }

    return resolvedStyledObject;
  }
}
