import { styled } from '@gluestack-style/react';
import { Pressable as RNPressable } from 'react-native';

export const Pressable = styled(RNPressable, {
  _web: {
    ':focusVisible': {
      outlineWidth: '2px',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },
  },
});
