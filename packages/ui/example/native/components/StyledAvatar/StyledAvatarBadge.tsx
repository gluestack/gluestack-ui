import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        w: 20,
        h: 20,
        bg: '$green.500',
        borderRadius: 9999,
        position: 'absolute',
        right: 5,
        bottom: 5,
        borderColor: 'white',
        borderWidth: 2,
      },
    },
    // sizes: {
    //   'xs': {
    //     style: {
    //       w: 2,
    //       h: 2,
    //     },
    //   },
    //   'sm': {
    //     style: {
    //       w: 3,
    //       h: 3,
    //     },
    //   },
    //   'md': {
    //     style: {
    //       w: 4,
    //       h: 4,
    //     },
    //   },
    //   'lg': {
    //     style: {
    //       w: 5,
    //       h: 5,
    //     },
    //   },
    //   'xl': {
    //     style: {
    //       w: 6,
    //       h: 6,
    //     },
    //   },
    //   '2xl': {
    //     style: {
    //       w: 7,
    //       h: 7,
    //     },
    //   },
    // },
    // defaultProps: {
    //   size: 'md',
    // },
  },

  {}
);
