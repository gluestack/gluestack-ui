import { styled } from '@dank-style/react';
import { ActivityIndicator } from 'react-native';

const Spinner = styled(
  ActivityIndicator,
  {
    // baseStyle: {
    //   style: { color: '$primary600' },
    // },
    // sizes: {
    //   sm: {
    //     style: {
    //       w: 20,
    //       h: 20,
    //     },
    //   },
    //   lg: {
    //     style: {
    //       w: 36,
    //       h: 36,
    //     },
    //   },
    // },
    // defaultProps: {
    //   size: 'sm',
    // },
  },
  {
    resolveProps: ['color'],
  }
);

export { Spinner as Root };
