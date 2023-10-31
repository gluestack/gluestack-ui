import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    height: '$1',
    width: '$16',
    backgroundColor: '$backgroundLight.400',
    // @ts-ignore
    // @ts-ignore
    rounded: '$full',
    _dark: {
      backgroundColor: '$backgroundDark.500',
    },
  },
  {}
);
