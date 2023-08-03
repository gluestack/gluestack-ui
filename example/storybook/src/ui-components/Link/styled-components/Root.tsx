import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,

  {
    _web: {
      'outlineWidth': 0,
      ':disabled': {
        cursor: 'not-allowed',
      },
      ':focusVisible': {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary400',
        },
      },
    },

    _text: {
      'fontWeight': '$normal',
      'textDecorationLine': 'underline',
      'color': '$info700',
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
        ':disabled': {
          opacity: 0.4,
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
