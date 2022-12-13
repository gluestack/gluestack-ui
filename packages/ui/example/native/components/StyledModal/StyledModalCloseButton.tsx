import { Pressable } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        position: 'absolute',
        right: 3,
        top: 3,
        zIndex: 1,
        p: '$2',
        bg: 'transparent',
        borderRadius: 4,
      },
    },
  },
  {}
);
