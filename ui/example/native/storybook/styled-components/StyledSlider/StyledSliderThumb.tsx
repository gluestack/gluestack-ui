import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: { bg: '$red.500', h: 10, w: 10, position: 'absolute' },
      descendants: {},
    },
  },
  {}
);
