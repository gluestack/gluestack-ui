import { styled } from '@dank-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    baseStyle: {},
  },
  { ancestorStyle: ['_spinner'], resolveProps: ['color'] }
);
