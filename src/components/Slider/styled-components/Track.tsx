import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    bg: '$muted.200',
    _dark: {
      bg: '$muted.700',
    },
    borderRadius: '$lg',
    overflow: 'hidden',
  },
  {
    componentName: 'SliderTrack',
    ancestorStyle: ['_track'],
  } as const
);
