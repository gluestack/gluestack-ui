import { Pressable } from 'react-native';
import { styled } from '../../styled';

export const Backdrop = styled(
  Pressable,
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
  },
  {}
);
