import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'RangeSliderRightThumb',
  ancestorStyle: ['_thumb'],
} as const);
