import { styled } from '@dank-style/react';
import { View } from 'react-native';

const VStack = styled(
  View,
  {
    flexDirection: 'column',

    defaultProps: {
      space: 'md',
    },
  },
  {}
);

export { default as Spacer } from './Spacer';
export { VStack as Root };
