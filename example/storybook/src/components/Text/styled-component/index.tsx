import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { Text as RNText } from 'react-native';

const Text = styled(
  RNText,
  {
    baseStyle: {
      style: {
        color: '$text900',
        fontWeight: '$normal',
        fontFamily: '$body',
        fontStyle: 'normal',
        fontSize: '$md',
        letterSpacing: '$md',
        lineHeight: '$lg',
      },
      colorMode: {
        dark: {
          style: {
            color: '$text50',
          },
        },
      },
    },
    variants: {
      modalHeader: {
        style: {
          fontSize: '$md',
          fontWeight: '$semibold',
          lineHeight: '$lg',
        },
      },
    },
    sizes: {
      'xs': {
        style: {
          fontSize: '$xs',
          letterSpacing: '$xs',
          lineHeight: '$lg',
        },
      },
      'sm': {
        style: {
          fontSize: '$sm',
          letterSpacing: '$sm',
          lineHeight: '$lg',
        },
      },
      'md': {
        style: {
          fontSize: '$md',
          letterSpacing: '$md',
          lineHeight: '$lg',
        },
      },
      'lg': {
        style: {
          fontSize: '$lg',
          letterSpacing: '$lg',
          lineHeight: '$lg',
        },
      },
      'xl': {
        style: {
          fontSize: '$xl',
          letterSpacing: '$xl',
          lineHeight: '$lg',
        },
      },
      '2xl': {
        style: {
          fontSize: '$2xl',
          letterSpacing: '$2xl',
          lineHeight: '$lg',
        },
      },
      '3xl': {
        style: {
          fontSize: '$3xl',
          lineHeight: '$lg',
        },
      },
      '4xl': {
        style: {
          fontSize: '$4xl',
          lineHeight: '$lg',
        },
      },
      '5xl': {
        style: {
          fontSize: '$5xl',
          lineHeight: '$lg',
        },
      },
      '6xl': {
        style: {
          fontSize: '$6xl',
          lineHeight: '$lg',
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {}
);

export { Text as Root };
