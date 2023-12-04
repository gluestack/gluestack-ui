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
    componentName: 'Spinner',
    resolveProps: ['color'],
  } as const,
  {
    propertyTokenMap: {
      //@ts-ignore
      size: 'size',
    },
  }
);
