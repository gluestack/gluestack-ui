import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    '_web': {
      outlineWidth: 0,
    },
    ':focusVisible': {
      _web: {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
      },
    },
    '_text': {
      'fontWeight': '$normal',
      'textDecorationLine': 'underline',
      '_light': {
        color: '$info700',
      },
      ':hover': {
        color: '$info600',
        textDecorationLine: 'none',
      },
      ':active': {
        color: '$info700',
      },
      ':disabled': {
        opacity: 0.4,
      },
      '_dark': {
        'color': '$info300',
        ':hover': {
          color: '$info400',
          textDecorationLine: 'none',
        },
        ':active': {
          color: '$info300',
        },
      },
      'cursor': 'pointer',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
