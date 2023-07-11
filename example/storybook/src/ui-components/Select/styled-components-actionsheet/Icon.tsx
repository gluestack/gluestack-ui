// @ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    w: 16,
    h: 16,
    mx: '$2',
    _icon: {
      color: '$textLight500',
      _dark: {
        color: '$textDark500',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
