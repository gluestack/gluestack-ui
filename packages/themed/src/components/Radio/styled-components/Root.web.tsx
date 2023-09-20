import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Radio',
  descendantStyle: ['_icon', '_text', '_indicator'],
  ancestorStyle: ['_radio'],
} as const);
