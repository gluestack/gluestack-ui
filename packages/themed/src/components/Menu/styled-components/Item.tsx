import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';
export const Item = styled(Pressable, {}, {
  componentName: 'MenuItem',
  descendantStyle: ['_text'],
} as const);
