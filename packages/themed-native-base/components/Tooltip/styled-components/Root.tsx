import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    width: '$full',
  },
  {
    componentName: 'Tooltip',
  } as const
);
