import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    p: '$4',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderColor: '$borderLight300',

    _dark: {
      borderColor: '$borderDark700',
    },
  },
  {
    componentName: 'PopoverFooter',
  } as const
);
