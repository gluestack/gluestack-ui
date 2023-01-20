import { View } from 'react-native';
import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        w: 20,
        h: 20,
        bg: `${config?.tokens?.colors.green500}`,
        borderRadius: 9999,
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderColor: 'white',
        borderWidth: 2,
      },
    },
  },
  { ancestorStyle: ['_badge'] }
);
