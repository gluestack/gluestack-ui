import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'bg': '$primary500',
    'h': '100%',
    // ':focus': {
    //   _web: {
    //     bg: '$primary600',
    //     // outlineWidth: 6,
    //     // outlineColor: '$primary700',
    //     // outlineStyle: 'solid',
    //     // _dark: {
    //     //   outlineColor: '$primary300',
    //     // },
    //   },
    // },
    ':active': {
      // outlineWidth: 4,
      // // outlineColor: '$primary700',
      // outlineStyle: 'solid',
      bg: '$red400',
      // ':hover': {
      //   outlineColor: '$primary700',
      // },

      _dark: {
        //outlineColor: '$primary400',
        bg: '$primary400',
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
    },
  },
  {}
);
