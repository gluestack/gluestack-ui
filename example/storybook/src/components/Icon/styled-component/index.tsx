import { verboseStyled } from '@dank-style/react';
import { Svg } from 'react-native-svg';

const Icon = verboseStyled(
  Svg,
  {
    baseStyle: {
      style: {
        w: 20,
        h: 20,
      },
      colorMode: {
        dark: {
          style: { color: '$muted50', h: 16, w: 16 },
        },
      },
    },
    variants: {
      modalHeader: {
        style: { color: '$muted500', h: 16, w: 16 },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
  }
);

export { Icon as Root };
