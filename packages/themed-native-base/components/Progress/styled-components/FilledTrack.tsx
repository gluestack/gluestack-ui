import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    backgroundColor: '$primary.600',
    _dark: {
      backgroundColor: '$primary.400',
    },
    height: '$full',
    // @ts-ignore
    borderRadius: '$full',
  },
  {
    componentName: 'ProgressFilledTrack',
    ancestorStyle: ['_filledTrack'],
  } as const
);
