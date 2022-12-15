import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$gray.300',
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
    //@ts-ignore

    defaultProps: {
      variant: 'horizontal',
    },
  },
  {}
);
