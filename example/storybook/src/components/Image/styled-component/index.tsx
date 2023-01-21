import { styled } from '@dank-style/react';
import { Image as RNImage } from 'react-native';

const Image = styled(
  RNImage,
  {
    baseStyle: {
      style: { maxWidth: '100%' },
    },
    sizes: {
      '2xs': {
        style: {
          w: '$6',
          h: '$6',
        },
      },
      'xs': {
        style: {
          w: '$10',
          h: '$10',
        },
      },
      'sm': {
        style: {
          w: '$16',
          h: '$16',
        },
      },
      'md': {
        style: {
          w: '$20',
          h: '$20',
        },
      },
      'lg': {
        style: {
          w: '$24',
          h: '$24',
        },
      },
      'xl': {
        style: {
          w: '$32',
          h: '$32',
        },
      },
      '2xl': {
        style: {
          w: '$64',
          h: '$64',
        },
      },
      'full': {
        style: {
          w: '100%',
          h: '100%',
        },
      },
    },
  },
  {}
);

export { default as FallbackText } from './FallbackText';
export { Image as Root };
