import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    width: '$full',
    height: '$full',
  },
  {
    componentName: 'Actionsheet',
  } as const
);
