import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    w: '$4',
    h: '$4',
    mr: '$2',
    _icon: {
      color: '$backgroundLight500',
      _dark: {
        color: '$backgroundDark400',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
