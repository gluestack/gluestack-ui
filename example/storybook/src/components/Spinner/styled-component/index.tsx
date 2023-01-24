import { styled } from '@dank-style/react';
import { ActivityIndicator } from 'react-native';

const Spinner = styled(
  ActivityIndicator,
  {},
  {
    resolveProps: ['color'],
  }
);

export { Spinner as Root };
