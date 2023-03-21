import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    variants: {
      size: {
        'xs': {
          height: 10,
          width: 10,
        },

        'sm': {
          height: 12,
          width: 12,
        },

        'md': {
          height: 16,
          width: 16,
        },

        'lg': {
          height: 24,
          width: 24,
        },

        'xl': {
          height: 32,
          width: 32,
        },

        '2xl': {
          height: 40,
          width: 40,
        },
      },
    },
  },
  {}
);
