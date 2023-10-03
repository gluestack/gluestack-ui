import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    width: '100%',
  },
  {
    componentName: 'Tooltip',
  } as const
);
