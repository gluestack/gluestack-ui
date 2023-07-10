import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'bg': '$primary500',
    ':focus': {
      bg: '$red300',
      _dark: {
        bg: '$red400',
      },
    },
    ':active': {
      bg: '$red600',
      _dark: {
        bg: '$red400',
      },
    },

    ':hover': {
      bg: '$primary600',
    },
    ':disabled': {
      bg: '$primary600_alpha60',
    },
    '_dark': {
      'bg': '$primary400',
      ':disabled': {
        bg: '$primary600_alpha60',
      },
      ':hover': {
        bg: '$primary500',
      },
    },
  },
  {}
);
