//@ts-nocheck
import { UL } from '@expo/html-elements';
import { styled } from '../../styled';
import { createMotionAnimatedComponent } from '@legendapp/motion';
const MotionUL = createMotionAnimatedComponent(UL);
export const Root = styled(
  MotionUL,
  {
    ':initial': {
      opacity: 0,
    },
    ':animate': {
      opacity: 1,
    },
    ':exit': {
      opacity: 0,
    },
    'minWidth': 200,
    'py': '$2',
    'rounded': '$sm',
    'bg': '$backgroundLight0',
    '_dark': {
      bg: '$backgroundDark900',
    },
    'defaultProps': {
      softShadow: '3',
    },
  },
  {}
);
