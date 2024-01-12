import { createStyle } from '@gluestack-style/react';

export const Accordion = createStyle({
  width: '$full',
  _icon: {
    color: '$text900',
  },
  _titleText: {
    color: '$text900',
  },
  _contentText: {
    color: '$text700',
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
        backgroundColor: '$white',

        _item: {
          backgroundColor: '$background0',
        },

        shadowColor: '$background900',

        shadowOffset: {
          width: 0,
          height: 3,
        },

        shadowRadius: 8,
        shadowOpacity: 0.2,
        elevation: 10,
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
      },
    },
  },
  defaultProps: {
    theme: 'light',
    size: 'md',
    variant: 'filled',
  },
});
