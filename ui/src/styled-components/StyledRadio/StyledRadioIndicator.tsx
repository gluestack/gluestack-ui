import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        bg: '$red500',
        h: 20,
        w: 20,
        borderRadius: 999,
      },
    },
  },
  {}
);
