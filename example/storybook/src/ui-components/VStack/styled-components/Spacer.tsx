import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      size: {
        'xs': {
          height: `$1`,
        },
        'sm': {
          height: `$2`,
        },
        'md': {
          height: `$3`,
        },
        'lg': {
          height: `$4`,
        },
        'xl': {
          height: `$5`,
        },
        '2xl': {
          height: `$6`,
        },
        '3xl': {
          height: `$7`,
        },
        '4xl': {
          height: `$8`,
        },
      },
    },
  },
  {}
);
