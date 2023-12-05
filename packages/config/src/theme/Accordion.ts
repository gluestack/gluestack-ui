import { createStyle } from '@gluestack-style/react';

export const Accordion = createStyle({
  width: '$full',
  _icon: {
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  _titleText: {
    color: '$textLight900',

    _dark: {
      color: '$textDark50',
    },
  },
  _contentText: {
    color: '$textLight700',
    _dark: {
      color: '$textDark200',
    },
  },

  variants: {
    size: {
      sm: {
        _titleText: {
          fontSize: '$sm',
          fontFamily: '$body',
          fontWeight: '$bold',
          lineHeight: '$sm',
        },
        _contentText: {
          fontSize: '$sm',
          fontFamily: '$body',
          fontWeight: '$normal',
          lineHeight: '$sm',
        },
      },
      md: {
        _titleText: {
          fontSize: '$md',
          fontFamily: '$body',
          fontWeight: '$bold',
          lineHeight: '$md',
        },
        _contentText: {
          fontSize: '$md',
          fontFamily: '$body',
          fontWeight: '$normal',
          lineHeight: '$md',
        },
      },
      lg: {
        _titleText: {
          fontSize: '$lg',
          fontFamily: '$body',
          fontWeight: '$bold',
          lineHeight: '$lg',
        },
        _contentText: {
          fontSize: '$lg',
          fontFamily: '$body',
          fontWeight: '$normal',
          lineHeight: '$lg',
        },
      },
    },
    variant: {
      filled: {
        _item: {
          backgroundColor: '$backgroundLight0',
        },
        shadowColor: '$backgroundLight900',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 10,
        _dark: {
          _item: {
            backgroundColor: '$backgroundDark950',
          },
        },
      },
      unfilled: {
        shadowColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        _item: {
          backgroundColor: 'transparent',
        },
        _dark: {
          _item: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
  defaultProps: {
    theme: 'light',
    size: 'sm',
    variant: 'filled',
  },
});
