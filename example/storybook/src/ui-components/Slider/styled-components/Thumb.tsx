import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary600',
    position: 'absolute',
    borderRadius: '$full',
    _dark: {
      bg: '$primary500',
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
      size: 'sm',
    },

    _web: {
      //@ts-ignore
      'shadow': '$4',
      'cursor': 'pointer',
      ':hover': {
        outlineWidth: 4,
        outlineColor: '$primary300',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary800',
        },
      },

      ':active': {
        outlineWidth: 8,
        outlineColor: '$primary300',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary800',
        },
      },

      ':focus': {
        outlineWidth: 6,
        outlineColor: '$primary700',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary300',
        },
      },

      ':disabled': {
        bg: '$primary600_alpha60',
      },
    },
  },
  { ancestorStyle: ['_thumb'] }
);
