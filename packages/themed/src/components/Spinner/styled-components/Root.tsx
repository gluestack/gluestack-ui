// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    props: {
      color: '$primary500',
    },
    _dark: {
      props: {
        color: '$primary400',
      },
    },
  },
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
