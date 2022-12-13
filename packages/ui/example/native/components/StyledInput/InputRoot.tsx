import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$primary.100',
        flexDirection: 'row',
      },
    },
  },
  {}
);
