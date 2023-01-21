import { Text } from 'react-native';
import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';

export default styled(
  Text,
  {
    baseStyle: {
      style: { color: 'white', ml: `${config?.tokens?.space[2]}` },
      state: {
        disabled: {
          style: { opacity: 0.6 },
        },
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
          },
        },
      },
      colorMode: {
        dark: {
          style: {
            color: `${config?.tokens?.colors.lightText}`,
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_text'],
    DEBUG: 'CHECKBOX_LABEL',
  }
);
