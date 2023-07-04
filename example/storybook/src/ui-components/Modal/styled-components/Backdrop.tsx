import { Pressable } from 'react-native';
import { createMotionAnimatedComponent } from '@legendapp/motion';
import { styled } from '../../styled';

const MotionPressable = createMotionAnimatedComponent(Pressable);

export default styled(
  MotionPressable,
  {
    //@ts-ignore
    ':initial': {
      opacity: 0,
    },
    ':animate': {
      opacity: 0.3,
    },
    ':exit': {
      opacity: 0,
    },
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'opacity': 0.6,
    'right': 0,
    'bottom': 0,
    'bg': '$backgroundLight950',
    '_dark': {
      bg: '$backgroundDark950',
    },
    '_web': {
      cursor: 'default',
    },
  },
  {}
);
