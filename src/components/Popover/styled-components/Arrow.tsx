import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    bg: '$muted.50',
    borderColor: '$muted.300',
    _dark: {
      bg: '$muted.800',
      borderColor: '$muted.700',
    },
  },
  {}
);
