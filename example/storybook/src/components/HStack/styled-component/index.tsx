import { styled } from '@dank-style/react';
import { View } from 'react-native';

const HStack = styled(
  View,
  {
    flexDirection: 'row',

    defaultProps: {
      space: 'md',
    },
  },
  {}
);

export { default as Spacer } from './Spacer';
export { HStack as Root };
