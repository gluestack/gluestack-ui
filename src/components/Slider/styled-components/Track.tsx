import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    backgroundColor: '$muted.200',
    _dark: {
      backgroundColor: '$muted.700',
    },
    // @ts-ignore
    borderRadius: '$lg',
    overflow: 'hidden',
  },
  {
    componentName: 'SliderTrack',
    ancestorStyle: ['_track'],
  } as const
);
