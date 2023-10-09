import { createStyle } from '@gluestack-style/react';

export const Checkbox = createStyle({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  variants: {
    size: {
      lg: {
        _text: {
          props: {
            size: 'lg',
          },
        },

        _icon: {
          props: {
            size: 'md',
          },
        },
        _indicator: {
          borderWidth: 3,
          h: '$6',
          w: '$6',
        },
      },

      md: {
        _text: {
          props: {
            size: 'md',
          },
        },

        _icon: {
          props: {
            size: 'sm',
          },
        },
        _indicator: {
          borderWidth: 2,
          h: '$5',
          w: '$5',
        },
      },

      sm: {
        _text: {
          props: {
            size: 'sm',
          },
        },

        _icon: {
          props: {
            size: '2xs',
          },
        },
        _indicator: {
          borderWidth: 2,
          h: '$4',
          w: '$4',
        },
      },
    },
  },

  defaultProps: {
    size: 'md',
  },

  _web: {
    'cursor': 'pointer',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
});
