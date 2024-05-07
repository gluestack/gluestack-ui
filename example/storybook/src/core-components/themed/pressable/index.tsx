'use client';
import { styled } from '@gluestack-style/react';
import { Pressable as RNPressable } from 'react-native';
import { createPressable } from '@gluestack-ui/pressable';

export const UIPressable = createPressable({ Root: RNPressable });

export const Pressable = styled(UIPressable, {
  _web: {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },
  },
});
