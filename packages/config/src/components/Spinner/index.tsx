import { ActivityIndicator } from 'react-native';
import { styled } from '@gluestack-style/react';
import { createSpinner } from '@gluestack-ui/spinner';

const StyledRoot = styled(
  ActivityIndicator,
  {
    props: {
      color: '$primary500',
    },
  },
  {
    resolveProps: ['color'],
  },
  {
    propertyTokenMap: {
      // @ts-ignore
      size: 'size',
    },
  }
);

export const Spinner = createSpinner({ Root: StyledRoot });
