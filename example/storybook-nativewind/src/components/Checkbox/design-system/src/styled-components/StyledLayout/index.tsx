import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    display: 'flex',
    flexDirection: 'row',
    // color: '$textLight700',
    // fontSize: '$md',
    // fontWight: '$normal',
    // lineHeight: '$md',
    // fontFamily: '$body',

    _dark: {
      // @ts-ignore
      color: '$textDark300',
    },
  },
  {}
);
