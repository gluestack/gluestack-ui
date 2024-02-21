import { createStyle } from '@gluestack-style/react';

export const ButtonGroup = createStyle({
  variants: {
    size: {
      xs: {
        _button: {
          props: {
            size: 'xs',
          },
        },
      },
      sm: {
        _button: {
          props: {
            size: 'sm',
          },
        },
      },
      md: {
        _button: {
          props: {
            size: 'md',
          },
        },
      },
      lg: {
        _button: {
          props: {
            size: 'lg',
          },
        },
      },
      xl: {
        _button: {
          _button: {
            props: {
              size: 'xl',
            },
          },
        },
      },
    },
    space: {
      'xs': {
        gap: '$1',
      },
      'sm': {
        gap: '$2',
      },
      'md': {
        gap: '$3',
      },
      'lg': {
        gap: '$4',
      },
      'xl': {
        gap: '$5',
      },
      '2xl': {
        gap: '$6',
      },
      '3xl': {
        gap: '$7',
      },
      '4xl': {
        gap: '$8',
      },
    },
    isAttached: {
      true: {
        gap: 0,
      },
    },
  },
  defaultProps: {
    size: 'md',
    space: 'sm',
  },
});
