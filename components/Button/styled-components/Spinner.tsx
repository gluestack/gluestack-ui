import { styled } from '@dank-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {},
  { ancestorStyle: ['_spinner'], resolveProps: ['color'] }
);
