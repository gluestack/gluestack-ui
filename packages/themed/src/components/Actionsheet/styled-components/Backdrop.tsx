import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

const MotionPressable = createMotionAnimatedComponent(
  Pressable
) as typeof Motion.Pressable;

export default styled(
  MotionPressable,
  {
    ':initial': {
      opacity: 0,
    },
    ':animate': {
      opacity: 0.5,
    },
    ':exit': {
      opacity: 0,
    },
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'right': 0,
    'bottom': 0,
    'bg': '$backgroundLight950',
    // @ts-ignore
    '_dark': {
      bg: '$backgroundDark950',
    },
    // @ts-ignore
    '_web': {
      cursor: 'default',
    },
  },
  {
    componentName: 'ActionsheetBackdrop',
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
