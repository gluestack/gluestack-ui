import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Stack = styled(
  View,
  {
    defaultProps: {
      space: 'md',
    },
  },
  {}
);

export { default as HSpacer } from './HSpacer';
export { default as VSpacer } from './VSpacer';
export { Stack as Root };
export default Stack;
