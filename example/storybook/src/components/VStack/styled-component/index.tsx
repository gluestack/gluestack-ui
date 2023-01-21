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

export { VStack as Root };
export { default as Spacer } from './Spacer';
