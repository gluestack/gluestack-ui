import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'h': '100%',
    'bg': '$backgroundLight200',
    'borderRadius': '$lg',
    'overflow': 'hidden',

    ':disabled': {},

    '_dark': {
      bg: '$backgroundDark800',
    },
  },
  {}
);
