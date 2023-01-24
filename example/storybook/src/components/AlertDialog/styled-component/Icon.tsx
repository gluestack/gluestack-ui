import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { Svg } from 'react-native-svg';

const Icon = styled(
  Svg,
  {
    w: 20,
    h: 20,
    _dark: {
      color: '$muted50',
      h: 16,
      w: 16,
    },
    variants: {
      variant: {
        modalHeader: {
          color: '$muted100',
          h: 16,
          w: 16,
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);

export { Icon as IconRoot };
