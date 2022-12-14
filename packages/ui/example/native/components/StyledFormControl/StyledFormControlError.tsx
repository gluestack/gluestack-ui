import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        bg: '$white',
        borderColor: '$red.500',
        borderWidth: 2,
        w: '100%',
        h: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // @ts-ignore
        gap: 8,
        p: 12,
      },
    },
  },
  {}
);
