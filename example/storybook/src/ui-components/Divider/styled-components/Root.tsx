import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    bg: '$borderLight200',

    variants: {
      variant: {
        vertical: {
          width: 1,
          height: '100%',
        },

        horizontal: {
          height: 1,
          width: '100%',
        },
      },
    },

    defaultProps: {
      variant: 'horizontal',
    },

    _dark: {
      bg: '$borderDark700',
    },
  },
  {}
);
