import { createStyle } from '@gluestack-style/react';

export const Avatar = createStyle({
  borderRadius: '$full',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  bg: '$primary600',
  variants: {
    size: {
      'xs': {
        w: '$6',
        h: '$6',

        _badge: {
          w: '$2',
          h: '$2',
        },

        _text: {
          props: { size: '2xs' },
        },
      },

      'sm': {
        w: '$8',
        h: '$8',

        _badge: {
          w: '$2',
          h: '$2',
        },

        _text: {
          props: { size: 'xs' },
        },
      },

      'md': {
        w: '$12',
        h: '$12',

        _badge: {
          w: '$3',
          h: '$3',
        },

        _text: {
          props: { size: 'md' },
        },
      },

      'lg': {
        w: '$16',
        h: '$16',

        _badge: {
          w: '$4',
          h: '$4',
        },

        _text: {
          props: { size: 'xl' },
        },
      },

      'xl': {
        w: '$24',
        h: '$24',

        _badge: {
          w: '$6',
          h: '$6',
        },

        _text: {
          props: { size: '3xl' },
        },
      },

      '2xl': {
        w: '$32',
        h: '$32',

        _badge: {
          w: '$8',
          h: '$8',
        },

        _text: {
          props: { size: '5xl' },
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
});
