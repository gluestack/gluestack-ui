import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    backgroundColor: '$muted.50',
    borderColor: '$muted.300',
    _dark: {
      backgroundColor: '$muted.800',
      borderColor: '$muted.700',
    },
  },
  {
    componentName: 'PopoverArrow',
  } as const
);
