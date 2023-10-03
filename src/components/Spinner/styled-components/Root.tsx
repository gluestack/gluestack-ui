// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    props: {
      color: '$primary.600',
    },
    _dark: {
      props: {
        color: '$primary.400',
      },
    },
  },
  {
    resolveProps: ['color'],
  },
  {
    propertyTokenMap: {
      size: 'size',
    },
  }
);
