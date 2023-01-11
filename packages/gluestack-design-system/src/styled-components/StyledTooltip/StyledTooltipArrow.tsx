import { styled } from 'dank-style';

import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        // @ts-ignore
        fontSize: 'sm',
        color: `$text50`,
        borderColor: '$blue500',
        bg: '$amber500',
        w: 100,
        h: 100,
      },
    },
  },
  {}
);
