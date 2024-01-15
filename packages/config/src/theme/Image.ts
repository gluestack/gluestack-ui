import { createStyle } from '@gluestack-style/react';

export const Image = createStyle({
  maxWidth: '$full',
  _web: {
    props: {
      // set property to revert-layer as RNW always set image height width inline
      style: {
        height: 'revert-layer',
        width: 'revert-layer',
      },
    },
  },
  variants: {
    size: {
      '2xs': {
        w: '$6',
        h: '$6',
      },

      'xs': {
        w: '$10',
        h: '$10',
      },

      'sm': {
        w: '$16',
        h: '$16',
      },

      'md': {
        w: '$20',
        h: '$20',
      },

      'lg': {
        w: '$24',
        h: '$24',
      },

      'xl': {
        w: '$32',
        h: '$32',
      },

      '2xl': {
        w: '$64',
        h: '$64',
      },
      'full': {
        w: '$full',
        h: '$full',
      },
    },
  },

  defaultProps: {
    size: 'md',
  },
});
