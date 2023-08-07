import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    p: '$4',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    bg: '$backgroundLight50',
    borderColor: '$borderLight300',

    _dark: {
      bg: '$backgroundDark800',
      borderColor: '$borderDark700',
    },
  },
  {}
);
