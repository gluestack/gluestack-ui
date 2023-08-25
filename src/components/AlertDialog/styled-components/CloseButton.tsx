// @ts-nocheck
import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'zIndex': 1,
    'rounded': '$sm',
    'p': '$2',
    '_icon': {
      color: '$backgroundLight.400',
    },
    '_text': {
      color: '$backgroundLight.400',
    },
    ':hover': {
      _icon: {
        color: '$backgroundLight.700',
      },
      _text: {
        color: '$backgroundLight.700',
      },
    },

    ':active': {
      _icon: {
        color: '$backgroundLight.900',
      },
      _text: {
        color: '$backgroundLight.900',
      },
    },

    '_dark': {
      '_icon': {
        color: '$backgroundLight.400',
      },
      '_text': {
        color: '$backgroundLight.400',
      },
      ':hover': {
        _icon: {
          color: '$backgroundDark.200',
        },
        _text: {
          color: '$backgroundLight.200',
        },
      },

      ':active': {
        _icon: {
          color: '$backgroundDark.100',
        },
      },
    },

    ':focusVisible': {
      bg: '$backgroundLight.100',
      _icon: {
        color: '$backgroundLight.900',
      },
      _text: {
        color: '$backgroundLight.900',
      },
      _dark: {
        bg: '$backgroundDark.700',
        _icon: {
          color: '$backgroundLight.100',
        },
        _text: {
          color: '$backgroundLight.100',
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
