import { createMotionAnimatedComponent } from '@legendapp/motion';
import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

//@ts-ignore
const MotionPressable = createMotionAnimatedComponent(Pressable);

export default styled(
  MotionPressable,
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
    'bg': '$backgroundLight.950',
    '_dark': {
      bg: '$backgroundDark.950',
    },
    '_web': {
      cursor: 'default',
    },
  },
  {
    componentName: 'SelectBackdrop',
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
