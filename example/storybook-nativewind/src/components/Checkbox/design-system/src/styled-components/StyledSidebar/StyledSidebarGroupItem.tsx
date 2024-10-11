import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';
export default styled(
  Pressable,
  {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // w: 239,
    _text: {
      color: '$textLight700',
      textAlign: 'left',
    },

    _web: {
      userSelect: 'none',
    },

    _light: {
      ':hover': {
        bg: '$primary100_alpha_30',
        _text: {
          color: '$textLight900',
        },
      },
      ':active': {
        bg: '$primary100_alpha_50',
      },
    },

    _dark: {
      ':hover': {
        bg: '$primary600_alpha_30',
        _text: {
          color: '$textDark50',
        },
      },
      ':active': {
        bg: '$primary600_alpha_50',
        _text: {
          color: '$textDark50',
        },
      },
      '_text': {
        color: '$textDark300',
      },
    },
  },
  { descendantStyle: ['_text'] }
);
