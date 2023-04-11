import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    w: 16,
    h: 16,
    mx: '$2',
    _icon: {
      color: '$textLight900',
      _dark: {
        color: '$textDark50',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
