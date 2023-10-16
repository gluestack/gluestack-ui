import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'CheckboxIndicator',
  ancestorStyle: ['_indicator'],
} as const);
