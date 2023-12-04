import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    height: '$10',
    width: '$full',
    overflow: 'hidden',
    bg: 'transparent',
  },
  {
    componentName: 'SkeletonWrapper',
    descendantStyle: ['_text'],
  } as const
);
