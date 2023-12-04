import { styled } from '@gluestack-style/react';
import {
  AnimationResolver,
  AnimatedPressable,
} from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';

export default styled(
  AnimatedPressable,
  {
    //@ts-ignore
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
    // @ts-ignore
    'bg': '$backgroundLight.950',
    '_dark': {
      backgroundColor: '$backgroundDark.950',
    },
    '_web': {
      cursor: 'default',
    },
  },
  {
    componentName: 'SelectBackdrop',
  } as const,
  {
    plugins: [new AnimationResolver(MotionAnimationDriver)],
  }
);
