import { createStyle } from '@gluestack-style/react';

export const TabsTrigger = createStyle({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  py: '$3',
  px: '$4',
  _titleText: {
    'color': '$textLight900',
    ':hover': {
      color: '$primary600',
    },
    ':active': {
      color: '$primary500',
    },
    '_dark': {
      'color': '$textDark50',
      ':hover': {
        color: '$primary300',
      },
      ':active': {
        color: '$primary400',
      },
    },
  },

  _web: {
    outlineWidth: 0,
  },

  variants: {
    variant: {
      pilled: {
        'borderWidth': 0,
        'borderRadius': '$full',
        ':active': {
          bg: '$primary0',
          _dark: {
            bg: '$primary800',
          },
        },
      },
      underlined: {
        'borderColor': '$borderLight300',
        ':hover': {
          borderColor: '$primary600',
          _dark: {
            borderColor: '$primary300',
          },
        },
        ':active': {
          borderColor: '$primary500',
          _dark: {
            borderColor: '$primary400',
          },
        },
      },
    },
  },

  // 'bg': 'transparent',

  // 'borderBottomWidth': 1,
  // 'borderBottomColor': '$borderLight300',

  // '_icon': {
  //   color: '$backgroundLight900',
  // },
  // ':hover': {
  //   borderBottomColor: '$primary600',
  //   _title: {
  //     color: '$primary600',
  //   },
  //   _icon: {
  //     color: '$primary600',
  //   },
  // },
  // ':active': {
  //   borderBottomColor: '$primary500',
  //   _title: {
  //     color: '$primary500',
  //   },
  //   _icon: {
  //     color: '$primary500',
  //   },
  // },
  // ':focus': {
  //   borderBottomColor: '$primary500',
  //   _title: {
  //     color: '$primary500',
  //   },
  //   _icon: {
  //     color: '$primary500',
  //   },
  // },
  // ':focusVisible': {
  //   borderBottomColor: '$primary500',
  //   _title: {
  //     color: '$primary500',
  //   },
  //   _icon: {
  //     color: '$primary500',
  //   },
  // },

  // '_dark': {
  //   'borderBottomColor': '$borderDark600',

  //   ':hover': {
  //     borderBottomColor: '$primary300',
  //     _icon: {
  //       color: '$primary300',
  //     },
  //   },
  //   ':active': {
  //     borderBottomColor: '$primary400',
  //     _icon: {
  //       color: '$primary400',
  //     },
  //   },
  //   ':focus': {
  //     borderBottomColor: '$primary400',
  //     _icon: {
  //       color: '$primary400',
  //     },
  //   },
  //   ':focusVisible': {
  //     borderBottomColor: '$primary400',
  //     _icon: {
  //       color: '$primary400',
  //     },
  //   },
  // },
  // 'variants': {
  //   size: {
  //     md: {
  //       px: '$4',
  //       py: '$2',

  //       _text: {
  //         fontSize: '$md',
  //         lineHeight: '$md',
  //       },
  //     },
  //   },
  // },

  // ':disabled': {
  //   opacity: 0.5,
  // },
});
