import type {
  // @ts-ignore
  IAnimationDriverPlugin,
  // @ts-ignore
  IAnimationResolver,
} from '@gluestack-style/react';

import {
  MotiImage,
  MotiView,
  MotiText,
  MotiScrollView,
  MotiSafeAreaView,
  MotiProgressBar,
} from 'moti';

let Moti = {
  Image: MotiImage,
  View: MotiView,
  Text: MotiText,
  ScrollView: MotiScrollView,
  SafeAreaView: MotiSafeAreaView,
  ProgressBar: MotiProgressBar,
};
export class MotiAnimationDriver implements IAnimationDriverPlugin {
  name: 'MotiAnimationDriver';
  LibraryImports = Moti;
  styledUtils = {
    aliases: {
      ':animate': 'animate',
      ':initial': 'from',
      ':exit': 'exit',
      ':initialProps': 'initialProps',
      ':animateProps': 'animateProps',
      ':transition': 'transition',
      ':transformOrigin': 'transformOrigin',
      ':whileTap': 'whileTap',
      ':whileHover': 'whileHover',
      ':onAnimationComplete': 'onAnimationComplete',
    } as const,
  };

  register(styledUtils: any) {
    if (this.styledUtils) {
      this.styledUtils.aliases = {
        ...this.styledUtils?.aliases,
        ...styledUtils?.aliases,
      };

      // @ts-ignore
      this.styledUtils.tokens = {
        // @ts-ignore
        ...this.styledUtils?.tokens,
        ...styledUtils?.tokens,
      };

      // @ts-ignore
      this.styledUtils.ref = styledUtils?.ref;
    }
  }

  constructor(styledUtils?: IAnimationResolver) {
    this.register(styledUtils);
    this.name = 'MotiAnimationDriver';
  }
}
