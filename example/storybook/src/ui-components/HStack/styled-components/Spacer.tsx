import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        'xs': {
          width: `$1`,
        },
        'sm': {
          width: `$2`,
        },
        'md': {
          width: `$3`,
        },
        'lg': {
          width: `$4`,
        },
        'xl': {
          width: `$5`,
        },
        '2xl': {
          width: `$6`,
        },
        '3xl': {
          width: `$7`,
        },
        '4xl': {
          width: `$8`,
        },
      },
    },
  },
  {}
);
