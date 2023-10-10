import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'SliderTrack',
  ancestorStyle: ['_track'],
} as const);
