import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    _icon: {
      color: '$red500',
      height: '$3',
      width: '$3',
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
