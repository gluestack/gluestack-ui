import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    p: '$4',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '$muted.300',

    _dark: {
      borderColor: '$muted.700',
    },
  },
  {
    componentName: 'PopoverHeader',
  } as const
);
