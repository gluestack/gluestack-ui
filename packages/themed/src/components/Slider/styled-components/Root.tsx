// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { View } from 'react-native';
export default styled(View, {}, {
  componentName: 'Slider',
  descendantStyle: ['_thumb', '_track', '_filledTrack'],
} as const);
