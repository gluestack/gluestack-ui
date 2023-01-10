import { styled } from 'dank-style';
import { View } from 'react-native';

export default styled(
  View,
  {
    sizes: {
      xs: {
        style: {
          height: '$1',
        },
      },
      sm: {
        style: {
          height: '$2',
        },
      },
      md: {
        style: {
          height: '$4',
        },
      },
      lg: {
        style: {
          height: '$6',
        },
      },
      xl: {
        style: {
          height: '$8',
        },
      },
    },
  },
  {}
);
