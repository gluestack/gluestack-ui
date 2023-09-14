import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    width: '$full',
    height: '$full',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  {
    componentName: 'SelectActionsheet',
  } as const
);
