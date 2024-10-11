import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text900',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$md',
    letterSpacing: '$md',
    lineHeight: '$lg',

    variants: {
      variant: {
        modalHeader: {
          fontSize: '$md',
          fontWeight: '$semibold',
          lineHeight: '$lg',
        },
      },

      size: {
        'xs': {
          fontSize: '$xs',
          letterSpacing: '$xs',
          lineHeight: '$lg',
        },

        'sm': {
          fontSize: '$sm',
          letterSpacing: '$sm',
          lineHeight: '$lg',
        },

        'md': {
          fontSize: '$md',
          letterSpacing: '$md',
          lineHeight: '$lg',
        },

        'lg': {
          fontSize: '$lg',
          letterSpacing: '$lg',
          lineHeight: '$lg',
        },

        'xl': {
          fontSize: '$xl',
          letterSpacing: '$xl',
          lineHeight: '$lg',
        },

        '2xl': {
          fontSize: '$2xl',
          letterSpacing: '$2xl',
          lineHeight: '$lg',
        },

        '3xl': {
          fontSize: '$3xl',
          lineHeight: '$lg',
        },

        '4xl': {
          fontSize: '$4xl',
          lineHeight: '$lg',
        },

        '5xl': {
          fontSize: '$5xl',
          lineHeight: '$lg',
        },

        '6xl': {
          fontSize: '$6xl',
          lineHeight: '$lg',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },

    _dark: {
      color: '$text50',
    },
  },
  {}
);
