// import { styled } from '../../styled';

import { styled } from '@gluestack-style/react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
export default styled(H1, {
  color: '$textLight900',
  letterSpacing: '$sm',
  fontWeight: '$bold',
  fontFamily: '$heading',

  // Overrides expo-html default styling
  marginVertical: 0,
  _dark: {
    color: '$textDark50',
  },
  variants: {
    size: {
      '5xl': {
        //@ts-ignore
        fontSize: '$6xl',
        lineHeight: '$7xl',
      },
      '4xl': {
        //@ts-ignore
        fontSize: '$5xl',
        lineHeight: '$6xl',
      },

      '3xl': {
        //@ts-ignore
        fontSize: '$4xl',
        lineHeight: '$5xl',
      },

      '2xl': {
        //@ts-ignore
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      'xl': {
        //@ts-ignore
        fontSize: '$2xl',
        lineHeight: '$3xl',
      },

      'lg': {
        //@ts-ignore
        fontSize: '$xl',
        lineHeight: '$2xl',
      },

      'md': {
        //@ts-ignore
        fontSize: '$lg',
        lineHeight: '$lg',
      },

      'sm': {
        //@ts-ignore
        fontSize: '$md',
        lineHeight: '$lg',
      },

      'xs': {
        //@ts-ignore
        fontSize: '$sm',
        lineHeight: '$xs',
      },
    },
  },

  defaultProps: {
    size: 'lg',
  },
});
