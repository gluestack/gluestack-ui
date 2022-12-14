import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        h: '100%',
        bg: '$trueGray.200',
        borderRadius: 32,
        overflow: 'hidden',
      },

      descendants: {},
    },
  },
  {}
);
