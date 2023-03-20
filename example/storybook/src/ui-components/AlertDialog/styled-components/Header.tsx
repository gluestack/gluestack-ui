import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    p: '$4',
    borderBottomWidth: 1,
    bg: '$backgroundLight50',
    borderColor: '$borderLight100',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    _dark: {
      bg: '$backgroundDark900',
      borderColor: '$borderDark800',
    },
  },
  {}
);
