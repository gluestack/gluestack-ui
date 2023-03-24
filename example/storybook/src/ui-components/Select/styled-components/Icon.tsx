import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    w: 16,
    h: 16,
    _icon: {
      color: '$backgroundLight300',
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
