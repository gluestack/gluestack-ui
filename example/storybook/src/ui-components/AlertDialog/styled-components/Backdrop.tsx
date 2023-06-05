import { createMotionAnimatedComponent } from '@legendapp/motion';
import { Pressable } from 'react-native';
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
    // opacity: 0.3,
    'right': 0,
    'bottom': 0,
    'bg': '$backgroundLight500',
  },
  {}
);
