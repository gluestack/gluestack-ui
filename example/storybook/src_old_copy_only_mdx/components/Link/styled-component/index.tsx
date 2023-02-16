import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

const Link = styled(
  Pressable,
  {
    backgroundColor: '$blue500',
  },
  {}
);

export { Link as Root };
export default Link;
