import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'h': '100%',
    'w': '100%',
    'bg': '$backgroundLight300',
    'borderRadius': '$lg',
    'overflow': 'hidden',

    ':disabled': {},

    '_dark': {
      bg: '$backgroundDark700',
    },
  },
  {}
);
