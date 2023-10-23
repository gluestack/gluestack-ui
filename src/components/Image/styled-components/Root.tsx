import { Image } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Image,
  {
    maxWidth: '$full',

    variants: {
      size: {
        '2xs': {
          width: '$6',
          height: '$6',
        },

        'xs': {
          width: '$10',
          height: '$10',
        },

        'sm': {
          width: '$16',
          height: '$16',
        },

        'md': {
          width: '$20',
          height: '$20',
        },

        'lg': {
          width: '$24',
          height: '$24',
        },

        'xl': {
          width: '$32',
          height: '$32',
        },

        '2xl': {
          width: '$64',
          height: '$64',
        },
        'full': {
          width: '$full',
          height: '$full',
        },
      },
    },
  },
  {
    componentName: 'Image',
  } as const
);
