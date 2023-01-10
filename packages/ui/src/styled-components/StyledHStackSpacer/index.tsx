import { styled } from 'dank-style';
import { View } from 'react-native';

export default styled(
  View,
  {
    sizes: {
      xs: {
        style: {
          width: '$1',
        },
      },
      sm: {
        style: {
          width: '$2',
        },
      },
      md: {
        style: {
          width: '$4',
        },
      },
      lg: {
        style: {
          width: '$6',
        },
      },
      xl: {
        style: {
          width: '$8',
        },
      },
    },
  },
  {}
);
