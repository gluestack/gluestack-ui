import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Input',
  descendantStyle: ['_input', '_icon'],
} as const);
