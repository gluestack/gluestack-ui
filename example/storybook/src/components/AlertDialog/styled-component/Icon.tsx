import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { Svg } from 'react-native-svg';

const Icon = styled(
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

export { Icon as IconRoot };
