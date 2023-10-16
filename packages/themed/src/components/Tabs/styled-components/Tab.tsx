//@ts-nocheck
import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'TabsTab',
  descendantStyle: ['_title', '_icon'],
  ancestorStyle: ['_tab'],
} as const);
