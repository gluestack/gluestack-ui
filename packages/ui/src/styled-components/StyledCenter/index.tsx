import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    sizes: {
      'xs': {
        style: { height: 10, width: 10 },
      },
      'sm': {
        style: {
          height: 12,
          width: 12,
        },
      },
      'md': {
        style: { height: 16, width: 16 },
      },
      'lg': {
        style: { height: 24, width: 24 },
      },
      'xl': {
        style: { height: 32, width: 32 },
      },
      '2xl': {
        style: { height: 40, width: 40 },
      },
    },
  },
  {}
);
