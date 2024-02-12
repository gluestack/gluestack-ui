import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export const Backdrop = styled(Pressable, {}, {
  componentName: 'MenuBackdrop',
} as const);
