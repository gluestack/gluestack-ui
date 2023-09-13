import { styled } from '@gluestack-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(ActivityIndicator, {}, {
  componentName: 'ButtonSpinner',
  ancestorStyle: ['_spinner'],
  resolveProps: ['color'],
} as const);
