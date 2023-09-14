import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary500',
    borderRadius: '$full',
    _dark: {
      bg: '$primary400',
    },
  },
  {
    componentName: 'ProgressFilledTrack',
    ancestorStyle: ['_filledTrack'],
  } as const
);
