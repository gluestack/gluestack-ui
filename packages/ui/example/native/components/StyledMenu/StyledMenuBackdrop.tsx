import { Pressable } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$gray.100',
        height: '99%',
        width: '100%',
        opacity: 0.5,
      },
    },
  },
  {}
);
