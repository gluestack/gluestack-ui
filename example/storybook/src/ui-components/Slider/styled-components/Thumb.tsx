import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary600',
    position: 'absolute',
    borderRadius: '$full',
    _dark: {
      bg: '$primary300',
    },

    variants: {
      size: {
        sm: {
          h: '$4',
          w: '$4',
        },
        md: {
          h: '$5',
          w: '$5',
        },
        lg: {
          h: '$6',
          w: '$6',
        },
      },
    },
    defaultProps: {
      size: 'md',
    },

    _web: {
      'shadow': 4,
      'cursor': 'pointer',

      ':active': {
        bg: '$primary700',
        _dark: {
          bg: '$primary400',
        },
      },
      ':focus': {
        outlineWidth: 4,
        outlineColor: '$primary300',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary700',
        },
      },

      ':disabled': {
        bg: '$primary600_alpha60',
        _dark: {
          bg: '$primary600_alpha60',
        },
      },
    },
  },
  { ancestorStyle: ['_thumb'] }
);
