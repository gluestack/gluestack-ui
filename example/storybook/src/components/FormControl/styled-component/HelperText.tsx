import { styled } from '@dank-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        //@ts-ignore
        fontSize: '$xs',
        color: '$text500',
      },
      colorMode: {
        dark: {
          style: { color: '$txet400' },
        },
      },
    },
  },
  {}
);
