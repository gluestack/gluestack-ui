import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    py: '$1',
    w: '$full',
    alignItems: 'center',
  },
  {
    componentName: 'SelectDragIndicatorWrapper',
  } as const
);
