// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {},
  {
    componentName: 'Spinner',
    resolveProps: ['color'],
  } as const,
  {
    propertyTokenMap: {
      size: 'size',
    },
  }
);
