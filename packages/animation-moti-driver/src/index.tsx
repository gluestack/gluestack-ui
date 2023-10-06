import type {
  IAnimationDriverPlugin,
  IAnimationResolver,
} from '@gluestack-style/react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {
  MotiImage,
  MotiView,
  MotiText,
  MotiScrollView,
  MotiSafeAreaView,
  MotiProgressBar,
  AnimatePresence,
} from 'moti';

let Moti = {
  Image: MotiImage,
  View: MotiView,
  Text: MotiText,
  ScrollView: MotiScrollView,
  SafeAreaView: MotiSafeAreaView,
  ProgressBar: MotiProgressBar,
  AnimatePresence,
};
export class MotiAnimationDriver implements IAnimationDriverPlugin {
  name: 'MotiAnimationDriver';
  engine = Moti;
  config = {
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
    animatedPropMap: {
      x: 'translateX',
      y: 'translateY',
    } as const,
  };

  register(config: any) {
    if (this.config) {
      this.config.aliases = {
        ...this.config?.aliases,
        ...config?.aliases,
      };

      // @ts-ignore
      this.config.tokens = {
        // @ts-ignore
        ...this.config?.tokens,
        ...config?.tokens,
      };

      // @ts-ignore
      this.config.ref = config?.ref;
    }
  }

  constructor(config?: IAnimationResolver) {
    this.register(config);
    this.name = 'MotiAnimationDriver';
  }
}
