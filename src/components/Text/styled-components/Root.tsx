import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.900',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    // @ts-ignore
    letterSpacing: '$md',

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
        '2xs': {
          // @ts-ignore
          fontSize: '$2xs',
          // @ts-ignore
          lineHeight: '$2xs',
        },
        'xs': {
          // @ts-ignore
          fontSize: '$xs',
          // @ts-ignore
          lineHeight: '$sm',
        },

        'sm': {
          // @ts-ignore
          fontSize: '$sm',
          // @ts-ignore
          lineHeight: '$sm',
        },

        'md': {
          // @ts-ignore
          fontSize: '$md',
          // @ts-ignore
          lineHeight: '$md',
        },

        'lg': {
          // @ts-ignore
          fontSize: '$lg',
          // @ts-ignore
          lineHeight: '$xl',
        },

        'xl': {
          // @ts-ignore
          fontSize: '$xl',
          // @ts-ignore
          lineHeight: '$xl',
        },

        '2xl': {
          // @ts-ignore
          fontSize: '$2xl',
          // @ts-ignore
          lineHeight: '$2xl',
        },

        '3xl': {
          // @ts-ignore
          fontSize: '$3xl',
          // @ts-ignore
          lineHeight: '$3xl',
        },

        '4xl': {
          // @ts-ignore
          fontSize: '$4xl',
          // @ts-ignore
          lineHeight: '$4xl',
        },

        '5xl': {
          // @ts-ignore
          fontSize: '$5xl',
          // @ts-ignore
          lineHeight: '$6xl',
        },

        '6xl': {
          // @ts-ignore
          fontSize: '$6xl',
          // @ts-ignore
          lineHeight: '$7xl',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    componentName: 'Text',
    ancestorStyle: ['_text'],
  } as const
);
