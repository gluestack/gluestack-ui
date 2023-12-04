import { Animated } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Animated.View,
  {
    height: '$full',
    width: '$full',
    bg: '$muted.200',
    _dark: {
      bg: '$muted.600',
    },
  },
  {
    componentName: 'Skeleton',
    descendantStyle: ['_text'],
  } as const
);
