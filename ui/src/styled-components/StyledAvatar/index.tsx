import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$red600',
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        h: 100,
        w: 100,
        position: 'relative',
      },
    },

    // sizes: {
    //   'xs': {
    //     style: {
    //       w: 6,
    //       h: 6,
    //     },
    //   },
    //   'sm': {
    //     style: {
    //       w: 8,
    //       h: 8,
    //     },
    //   },
    //   'md': {
    //     style: {
    //       w: 12,
    //       h: 12,
    //     },
    //   },
    //   'lg': {
    //     style: {
    //       w: 16,
    //       h: 16,
    //     },
    //   },
    //   'xl': {
    //     style: {
    //       w: 24,
    //       h: 24,
    //     },
    //   },
    //   '2xl': {
    //     style: {
    //       w: 32,
    //       h: 32,
    //     },
    //   },
    // },
    // defaultProps: {
    //   size: 'md',
    // },
  },
  {}
);
