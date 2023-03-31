import { Motion } from '@legendapp/motion';
import { styled } from '../../styled';

export default styled(
  Motion.View,
  {
    alignItems: 'center',
    rounded: 0,
    borderTopLeftRadius: '$2xl',
    borderTopRightRadius: '$2xl',
    bg: '$backgroundLight0',
    maxHeight: '80%',

    // ':transition': {
    //   duration: 2000,
    // },
    _dark: {
      bg: '$backgroundDark900',
    },

    _web: {
      userSelect: 'none',
    },
  },
  {}
);
