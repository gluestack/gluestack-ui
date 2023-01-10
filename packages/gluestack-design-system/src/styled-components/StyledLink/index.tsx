import { styled } from 'dank-style';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        backgroundColor: '$blue500',
      },
    },
  },
  {}
);
