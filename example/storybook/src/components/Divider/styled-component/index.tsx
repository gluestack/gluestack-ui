import { View } from 'react-native';
import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';

const Divider = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: `${config?.tokens?.colors.muted300}`,
      },
      colorMode: {
        dark: {
          style: {
            bg: `${config?.tokens?.colors.muted600}`,
          },
        },
      },
    },

    variants: {
      vertical: {
        style: {
          width: '1px',
          height: '100%',
        },
      },
      horizontal: {
        style: {
          height: '1px',
          width: '100%',
        },
      },
    },
    defaultProps: {
      variant: 'horizontal',
    },
  },
  {}
);

export { Divider as Root };
