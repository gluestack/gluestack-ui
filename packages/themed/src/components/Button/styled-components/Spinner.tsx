import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {},
  { ancestorStyle: ['_spinner'], resolveProps: ['color'] }
);
