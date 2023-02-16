import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    bg: '$primary600',
    shadow: '$4',
    position: 'absolute',
    borderRadius: 9999,
    // top: -6,
    marginLeft: '-1%',

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
        outlineColor: '$primary400',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary400',
        },
      },

      ':disabled': {
        opacity: 0.4,
      },
    },
  },
  { ancestorStyle: ['_thumb'] }
);
