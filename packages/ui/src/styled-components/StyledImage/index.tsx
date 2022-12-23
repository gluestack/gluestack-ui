import { config } from '../ui.config';
import { Image } from 'react-native';
import { styled } from '@gluestack/ui-styled';

// const sizes = {
//   '2xs': {
//     style: {
//       w: '$6',
//       h: '$6',
//     },
//   },
//   'xs': '10',
//   'sm': '16',
//   'md': '20',
//   'lg': '24',
//   'xl': '32',
//   '2xl': '64',
//   'full': '100%',
// };
export default styled(
  Image,
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
  {},
  config
);
