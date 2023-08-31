import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
import { Pressable } from 'react-native';
import { styled } from '../../styled';

const MotionPressable = createMotionAnimatedComponent(
  Pressable
) as typeof Motion.Pressable;

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
    ':transition': {
      type: 'spring',
      damping: 18,
      stiffness: 250,
      opacity: {
        type: 'timing',
        duration: 250,
      },
    },
    'position': 'absolute',
    'left': 0,
    'top': 0,
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
  {
    componentName: 'AlertDialogBackdrop',
  }
);
