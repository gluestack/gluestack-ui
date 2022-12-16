import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: 8,
        // bg: '$blue.900',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
          },
        },
      },
    },
  },
  {}
);
