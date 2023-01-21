import { Text } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  Text,
  {
    baseStyle: {
      style: { color: '$text900', ml: '$2' },
      colorMode: {
        dark: {
          style: {
            color: '$text50',
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
