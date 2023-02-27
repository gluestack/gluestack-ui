import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'column',
    defaultProps: {
      space: 'md',
    },
  },
  {}
);
