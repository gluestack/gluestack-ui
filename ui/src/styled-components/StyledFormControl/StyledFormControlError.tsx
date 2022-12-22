import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        bg: '$white',
        borderColor: '$red500',
        borderWidth: 2,
        w: '100%',
        h: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // @ts-ignore
        p: 12,
      },
    },
  },
  {}
);
