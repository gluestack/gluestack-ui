import { styled } from 'dank-style';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    baseStyle: {},
  },
  { ancestorStyle: ['_spinner'], resolveProps: ['color'] }
);
