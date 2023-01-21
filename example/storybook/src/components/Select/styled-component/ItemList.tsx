import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        fontSize: 12,
        color: '$text500',
      },
      colorMode: {
        dark: {
          style: {
            color: '$text50',
          },
        },
      },
    },
  },
  { ancestorStyle: ['_itemList'] }
);
