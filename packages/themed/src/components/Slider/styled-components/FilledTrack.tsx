import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'SliderFilledTrack',
  ancestorStyle: ['_filledTrack'],
} as const);
