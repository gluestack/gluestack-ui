import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'zIndex': 1,
    'rounded': '$sm',
    'p': '$2',
    '_icon': {
      color: '$backgroundLight400',
    },
    '_text': {
      color: '$backgroundLight400',
    },
    ':hover': {
      _icon: {
        color: '$backgroundLight700',
      },
      _text: {
        color: '$backgroundLight700',
      },
    },

    ':active': {
      bg: '$backgroundLight100',
      _icon: {
        color: '$backgroundLight900',
      },
      _text: {
        color: '$backgroundLight900',
      },
    },

    '_dark': {
      '_icon': {
        color: '$backgroundLight400',
      },
      '_text': {
        color: '$backgroundLight400',
      },
      ':hover': {
        _icon: {
          color: '$backgroundLight200',
        },
        _text: {
          color: '$backgroundLight200',
        },
      },

      ':active': {
        bg: '$backgroundDark800',
        _icon: {
          color: '$backgroundLight100',
        },
      },
    },

    ':focusVisible': {
      bg: '$backgroundLight100',
      _icon: {
        color: '$backgroundLight700',
      },
      _text: {
        color: '$backgroundLight700',
      },
      _dark: {
        bg: '$backgroundDark800',
        _icon: {
          color: '$backgroundLight200',
        },
        _text: {
          color: '$backgroundLight200',
        },
      },
    },

    '_web': {
      outlineWidth: 0,
      cursor: 'pointer',
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
  }
);
