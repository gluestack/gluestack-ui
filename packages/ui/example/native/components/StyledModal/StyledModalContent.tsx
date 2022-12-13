import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        width: '75%',
        maxWidth: '380',
        shadow: 1,
        borderRadius: 4,
        overflow: 'hidden',
        bg: '$blue.50',
      },
    },
  },
  {}
);
