import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    backgroundColor: '$primary.600',
    _dark: {
      backgroundColor: '$primary.500',
    },
  },
  {
    componentName: 'SliderFilledTrack',
    ancestorStyle: ['_filledTrack'],
  } as const
);
