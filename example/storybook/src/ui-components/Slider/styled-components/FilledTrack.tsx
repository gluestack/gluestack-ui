import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'bg': '$primary600',
    'h': '100%',
    // ':focus': {
    //   _web: {
    //     outlineWidth: 6,
    //     outlineColor: '$primary700',
    //     outlineStyle: 'solid',
    //     _dark: {
    //       outlineColor: '$primary300',
    //     },
    //   },
    // },
    ':disabled': {
      bg: '$primary600_alpha60',
    },
    '_dark': {
      'bg': '$primary300',
      ':disabled': {
        bg: '$primary600_alpha60',
      },
    },
  },
  {}
);
