import { styled } from '@dank-style/react';
import { View } from 'react-native';
import { config } from '../../../../gluestack.config';

export default styled(
  View,
  {
    sizes: {
      xs: {
        style: {
          width: `${config?.tokens?.space[1]}`,
        },
      },
      sm: {
        style: {
          width: `${config?.tokens?.space[2]}`,
        },
      },
      md: {
        style: {
          width: `${config?.tokens?.space[4]}`,
        },
      },
      lg: {
        style: {
          width: `${config?.tokens?.space[6]}`,
        },
      },
      xl: {
        style: {
          width: `${config?.tokens?.space[8]}`,
        },
      },
    },
  },
  {}
);
