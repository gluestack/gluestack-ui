import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Badge',
  descendantStyle: ['_text', '_icon'],
} as const);
