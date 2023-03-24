import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    _icon: {
      color: '$backgroundLight300',
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);
