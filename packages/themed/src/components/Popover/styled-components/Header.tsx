import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    p: '$4',
    pb: '$2',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  {
    componentName: 'PopoverHeader',
  } as const
);
