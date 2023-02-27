import { styled } from '@dank-style/react';
import { H1 } from '@expo/html-elements';

export default styled(
  H1,
  {
    color: '$textLight900',
    letterSpacing: '$sm',
    fontWeight: 'bold',
    fontFamily: '$heading',

    variants: {
      size: {
        '5xl': {
          fontSize: '$7xl',
          lineHeight: '$7xl',
        },
        '4xl': {
          fontSize: '$5xl',
          lineHeight: '$5xl',
        },

        '3xl': {
          fontSize: '$4xl',
          lineHeight: '$5xl',
        },

        '2xl': {
          fontSize: '$3xl',
          lineHeight: '$3xl',
        },

        'xl': {
          fontSize: '$2xl',
          lineHeight: '$3xl',
        },

        'lg': {
          fontSize: '$xl',
          lineHeight: '$2xl',
        },

        'md': {
          fontSize: '$lg',
          lineHeight: '$md',
        },

        'sm': {
          fontSize: '$md',
          lineHeight: '$lg',
        },

        'xs': {
          fontSize: '$sm',
          lineHeight: '$xs',
        },
      },
    },

    defaultProps: {
      size: 'lg',
    },

    //@ts-ignore
    _dark: {
      color: '$textDark50',
    },
  },
  {}
);
