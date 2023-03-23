import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    // p: '$2',
    rounded: 0,
    borderTopLeftRadius: '$2xl',
    borderTopRightRadius: '$2xl',
    bg: '$backgroundLight0',
    _dark: {
      bg: '$backgroundDark900',
    },
    _ios: {
      pb: '$10',
    },
    _android: {
      pb: '$10',
    },
    _web: {
      //@ts-ignore
      userSelect: 'none',
    },
  },
  {}
);
