import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.6,
    right: 0,
    bottom: 0,
    bg: '$backgroundLight950',
    _dark: {
      bg: '$backgroundDark950',
    },
  },
  {}
);
