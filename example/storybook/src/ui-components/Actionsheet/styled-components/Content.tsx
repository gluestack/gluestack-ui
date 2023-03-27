import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    rounded: 0,
    borderTopLeftRadius: '$2xl',
    borderTopRightRadius: '$2xl',
    bg: '$backgroundLight0',
    // maxHeight: 550,
    _dark: {
      bg: '$backgroundDark900',
    },

    _web: {
      userSelect: 'none',
    },
  },
  {}
);
