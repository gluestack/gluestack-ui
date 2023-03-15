import { styled } from '../../core/styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {},
  { ancestorStyle: ['_spinner'], resolveProps: ['color'] }
);
