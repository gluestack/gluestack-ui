//@ts-nocheck
import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Popover',
  descendantStyle: ['_content'],
} as const);
