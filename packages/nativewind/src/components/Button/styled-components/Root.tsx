// @ts-nocheck
import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'Button',
  descendantStyle: ['_text', '_spinner', '_icon'],
  ancestorStyle: ['_button'],
} as const);
