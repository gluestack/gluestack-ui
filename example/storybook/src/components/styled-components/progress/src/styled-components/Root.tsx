import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(View, {
  bg: '$backgroundLight200',
  borderRadius: 999,
  w: '100%',

  variants: {
    size: {
      xs: {
        h: '$1',
      },
      sm: {
        h: '$2',
      },
      md: {
        h: '$3',
      },
      lg: {
        h: '$4',
      },
    },
  },
  _dark: {
    bg: '$backgroundDark800',
  },
});
