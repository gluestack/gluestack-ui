import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        height: 4,
        width: '2',
        bg: '$blue.600',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  {}
);
