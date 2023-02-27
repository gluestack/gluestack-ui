import { styled } from '@dank-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    color: '$white',
  },
  {
    ancestorStyle: ['_spinner'],
  }
);
