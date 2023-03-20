import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.3,
    right: 0,
    bottom: 0,
    bg: '$backgroundLight800',
    _dark: {
      bg: '$backgroundDark800',
    },
  },
  {}
);
