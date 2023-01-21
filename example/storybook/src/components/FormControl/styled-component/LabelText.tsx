import { styled } from '@dank-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        //@ts-ignore
        fontSize: '$sm',
        //@ts-ignore
        fontWeight: '$medium',
        color: '$text500',
      },
      colorMode: {
        dark: {
          style: {
            color: '$text400',
          },
        },
      },
    },
  },
  {}
);
