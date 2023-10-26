import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    h: '$10',
    w: '$full',
    overflow: 'hidden',
  },
  {
    componentName: 'Skeleton',
    descendantStyle: ['_text'],
  } as const
);
