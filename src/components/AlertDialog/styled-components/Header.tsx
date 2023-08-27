import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    p: '$4',
    borderBottomWidth: 1,
    borderColor: '$muted.300',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    _dark: {
      borderColor: '$muted.700',
    },
  },
  {}
);
