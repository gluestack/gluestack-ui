import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  {
    componentName: 'Center',
  } as const
);
