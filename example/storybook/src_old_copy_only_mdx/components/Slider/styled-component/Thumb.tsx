import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    bg: '$primary600',
    h: 16,
    w: 16,
    position: 'absolute',
    borderRadius: 9999,
    top: -6,
    // marginLeft: '-1%',

    _dark: {
      bg: '$primary500',
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
        outlineWidth: 6,
        outlineColor: '$primary300',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary400',
        },
      },

      ':focus': {
        outlineWidth: 2,
        outlineColor: '$primary400',
        outlineStyle: 'solid',

        _dark: {
          outlineColor: '$primary800',
        },
      },

      ':disabled': {
        opacity: 0.4,
      },
    },
  },
  {}
);
