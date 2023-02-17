import { styled } from '@dank-style/react';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    w: 20,
    h: 20,

    variants: {
      variant: {
        modalHeader: {
          color: '$muted500',
          h: 16,
          w: 16,
        },
      },
    },

    _dark: {
      color: '$muted50',
      h: 16,
      w: 16,
    },
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
  }
);
