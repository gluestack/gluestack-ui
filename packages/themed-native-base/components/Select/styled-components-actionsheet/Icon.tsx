import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    width: '$4',
    height: '$4',
    marginRight: '$2',
    _icon: {
      color: '$backgroundLight.500',
      _dark: {
        color: '$backgroundDark.400',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
