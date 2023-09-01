import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(ActivityIndicator, {}, {
  componentName: 'ButtonSpinner',
  ancestorStyle: ['_spinner'],
  resolveProps: ['color'],
} as const);
