import { Image } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Image,
  {
    baseStyle: {
      style: {
        w: '100%',
        h: '100%',
        borderRadius: 9999,
        position: 'absolute',
      },
    },
  },
  {}
);
