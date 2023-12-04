import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    pointerEvents: 'none',
  },
  {
    componentName: 'Tooltip',
  } as const
);
