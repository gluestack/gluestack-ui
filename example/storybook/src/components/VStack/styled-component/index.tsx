import { styled } from '@dank-style/react';
import { View } from 'react-native';

const VStack = styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'column',
      },

      descendants: {},
    },
    defaultProps: {
      //@ts-ignore
      space: 'md',
    },
  },
  {}
);

export { default as Spacer } from './Spacer';
export { VStack as Root };
