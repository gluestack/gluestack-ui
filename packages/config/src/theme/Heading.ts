import { createStyle } from '@gluestack-style/react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';

export const Heading = createStyle({
  color: '$text900',
  letterSpacing: '$sm',
  fontWeight: '$bold',
  fontFamily: '$heading',

  // Overrides expo-html default styling
  marginVertical: 0,

  variants: {
    isTruncated: {
      true: {
        props: {
          // @ts-ignore
          numberOfLines: 1,
          ellipsizeMode: 'tail',
        },
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    underline: {
      true: {
        textDecorationLine: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecorationLine: 'line-through',
      },
    },
    size: {
      '5xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$6xl',
      },
      '4xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$5xl',
      },

      '3xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$4xl',
      },

      '2xl': {
        //@ts-ignore
        props: { as: H2 },
        fontSize: '$3xl',
      },

      'xl': {
        //@ts-ignore
        props: { as: H3 },
        fontSize: '$2xl',
      },

      'lg': {
        //@ts-ignore
        props: { as: H4 },
        fontSize: '$xl',
      },

      'md': {
        //@ts-ignore
        props: { as: H5 },
        fontSize: '$lg',
      },

      'sm': {
        //@ts-ignore
        props: { as: H6 },
        fontSize: '$md',
      },

      'xs': {
        //@ts-ignore
        props: { as: H6 },
        fontSize: '$sm',
      },
    },
    sub: {
      true: {
        fontSize: '$xs',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    highlight: {
      true: {
        bg: '$yellow500',
      },
    },
  },

  defaultProps: {
    size: 'lg',
  },
});
