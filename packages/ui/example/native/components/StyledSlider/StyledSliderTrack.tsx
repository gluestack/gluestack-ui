import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: { bg: '$teal.800', h: '100%' },

      descendants: {},
    },
  },
  {}
);
