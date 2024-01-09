import { createStyle } from '@gluestack-style/react';

export const TabsTab = createStyle({
  'bg': 'transparent',
  '_web': {
    outlineWidth: 0,
  },
  'borderBottomWidth': 1,
  'borderBottomColor': '$borderLight300',
  '_title': {
    color: '$textLight900',
  },
  '_icon': {
    color: '$backgroundLight900',
  },
  ':hover': {
    borderBottomColor: '$primary600',
    _title: {
      color: '$primary600',
    },
    _icon: {
      color: '$primary600',
    },
  },
  ':active': {
    borderBottomColor: '$primary500',
    _title: {
      color: '$primary500',
    },
    _icon: {
      color: '$primary500',
    },
  },
  ':focus': {
    borderBottomColor: '$primary500',
    _title: {
      color: '$primary500',
    },
    _icon: {
      color: '$primary500',
    },
  },
  ':focusVisible': {
    borderBottomColor: '$primary500',
    _title: {
      color: '$primary500',
    },
    _icon: {
      color: '$primary500',
    },
  },

  '_dark': {
    'borderBottomColor': '$borderDark600',

    ':hover': {
      borderBottomColor: '$primary300',
      _icon: {
        color: '$primary300',
      },
    },
    ':active': {
      borderBottomColor: '$primary400',
      _icon: {
        color: '$primary400',
      },
    },
    ':focus': {
      borderBottomColor: '$primary400',
      _icon: {
        color: '$primary400',
      },
    },
    ':focusVisible': {
      borderBottomColor: '$primary400',
      _icon: {
        color: '$primary400',
      },
    },
  },
  'variants': {
    size: {
      md: {
        px: '$4',
        py: '$2',

        _text: {
          fontSize: '$md',
          lineHeight: '$md',
        },
      },
    },
  },

  'defaultProps': {
    size: 'md',
  },

  ':disabled': {
    opacity: 0.5,
  },
});
