import { styled } from '@gluestack-style/react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
export default styled(
  H3,
  {
    color: '$text.900',
    // @ts-ignore
    letterSpacing: '$sm',
    fontWeight: '$bold',
    fontFamily: '$heading',

    // Overrides expo-html default styling
    marginVertical: 0,
    _dark: {
      color: '$text.50',
    },
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
      sub: {
        true: {
          // @ts-ignore
          fontSize: '$xs',
          // @ts-ignore
          lineHeight: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          backgroundColor: '$yellow.500',
        },
      },
      size: {
        '5xl': {
          //@ts-ignore
          props: { as: H1 },
          // @ts-ignore
          fontSize: '$6xl',
          // @ts-ignore
          lineHeight: '$7xl',
        },
        '4xl': {
          //@ts-ignore
          props: { as: H1 },
          // @ts-ignore
          fontSize: '$5xl',
          // @ts-ignore
          lineHeight: '$6xl',
        },

        '3xl': {
          //@ts-ignore
          props: { as: H1 },
          // @ts-ignore
          fontSize: '$4xl',
          // @ts-ignore
          lineHeight: '$5xl',
        },

        '2xl': {
          //@ts-ignore
          props: { as: H2 },
          // @ts-ignore
          fontSize: '$3xl',
          // @ts-ignore
          lineHeight: '$3xl',
        },

        'xl': {
          //@ts-ignore
          props: { as: H3 },
          // @ts-ignore
          fontSize: '$2xl',
          // @ts-ignore
          lineHeight: '$3xl',
        },

        'lg': {
          //@ts-ignore
          props: { as: H4 },
          // @ts-ignore
          fontSize: '$xl',
          // @ts-ignore
          lineHeight: '$2xl',
        },

        'md': {
          //@ts-ignore
          props: { as: H5 },
          // @ts-ignore
          fontSize: '$lg',
          // @ts-ignore
          lineHeight: '$lg',
        },

        'sm': {
          //@ts-ignore
          props: { as: H6 },
          // @ts-ignore
          fontSize: '$md',
          // @ts-ignore
          lineHeight: '$lg',
        },

        'xs': {
          //@ts-ignore
          props: { as: H6 },
          // @ts-ignore
          fontSize: '$sm',
          // @ts-ignore
          lineHeight: '$xs',
        },
      },
    },

    defaultProps: {
      size: 'lg',
    },
  },
  {
    componentName: 'Heading',
  } as const
);
