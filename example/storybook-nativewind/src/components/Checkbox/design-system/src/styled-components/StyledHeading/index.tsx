import { styled } from '@gluestack-style/react';
import { H1 } from '@expo/html-elements';

export default styled(
  H1,
  {
    color: '$text900',
    fontWeight: 'bold',
    lineHeight: 20,
    fontFamily: '$heading',

    variants: {
      size: {
        '4xl': {
          fontSize: 60,
          letterSpacing: 0.8,
          color: '$amber100',
        },

        '3xl': {
          fontSize: 48,
          letterSpacing: 0.8,
        },

        '2xl': {
          fontSize: 36,
        },

        'xl': {
          fontSize: 30,
        },

        'lg': {
          fontSize: 24,
        },

        'md': {
          fontSize: 20,
        },

        'sm': {
          fontSize: 16,
        },

        'xs': {
          fontSize: 14,
        },
      },
    },

    defaultProps: {
      size: 'lg',
    },

    _dark: {
      color: '$amber100',
    },
  },
  {}
);
