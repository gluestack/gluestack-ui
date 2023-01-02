import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$muted300',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted600',
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
  {},
  config
);
