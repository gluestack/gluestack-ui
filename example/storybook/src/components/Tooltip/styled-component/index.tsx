import { styled } from '@dank-style/react';
import { View } from 'react-native';
const Tooltip = styled(
  View,
  {
    baseStyle: {
      style: {},
    },
  },
  {}
);

export { Tooltip as Root };
export { default as Content } from './Content';
export { default as Arrow } from './Arrow';
