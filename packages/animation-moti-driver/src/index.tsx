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
import {
  Svg as RNSvg,
  Rect as RNRect,
  Circle as RNCircle,
  Ellipse as RNEllipse,
  Line as RNLine,
  Polyline as RNPolyline,
  Path as RNPath,
  TSpan as RNTSpan,
  TextPath as RNTextPath,
  G as RNG,
  ClipPath as RNClipPath,
} from 'react-native-svg';
import { motifySvg } from 'moti/svg';

const Svg = motifySvg(RNSvg);
const Rect = motifySvg(RNRect);
const Circle = motifySvg(RNCircle);
const Ellipse = motifySvg(RNEllipse);
const Line = motifySvg(RNLine);
const Polyline = motifySvg(RNPolyline);
const Path = motifySvg(RNPath);
const TSpan = motifySvg(RNTSpan);
const TextPath = motifySvg(RNTextPath);
const G = motifySvg(RNG);
const ClipPath = motifySvg(RNClipPath);

let Moti = {
  Image: MotiImage,
  View: MotiView,
  Text: MotiText,
  ScrollView: MotiScrollView,
  SafeAreaView: MotiSafeAreaView,
  ProgressBar: MotiProgressBar,
  Svg,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polyline,
  Path,
  TSpan,
  TextPath,
  G,
  ClipPath,
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
