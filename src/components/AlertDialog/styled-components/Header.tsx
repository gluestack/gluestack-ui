import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    p: '$4',
    borderBottomWidth: 1,
    borderColor: '$muted.300',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    _dark: {
      borderColor: '$muted.700',
    },
  },
  {
    componentName: 'AlertDialogHeader',
  } as const
);
