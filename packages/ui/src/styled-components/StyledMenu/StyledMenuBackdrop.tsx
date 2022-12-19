import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: '$black',
        opacity: 0.1,
      },
    },
  },
  {}
);
