//@ts-nocheck
import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Modal',
  descendantStyle: ['_content'],
} as const);
