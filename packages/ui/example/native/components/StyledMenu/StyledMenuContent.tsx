// import { Popper } from '@gluestack/styled';
import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$gray.900',
        padding: 8,
        borderRadius: 4,
        w: 190,
      },
    },
  },
  {}
);
