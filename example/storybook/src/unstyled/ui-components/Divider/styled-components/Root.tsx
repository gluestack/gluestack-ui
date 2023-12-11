import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    bg: '$backgroundLight200',
    _dark: {
      bg: '$backgroundLight800',
    },
    variants: {
      orientation: {
        vertical: {
          width: '$px',
          height: '100%',
        },
        horizontal: {
          height: '$px',
          width: '100%',
        },
      },
    },
    defaultProps: {
      orientation: 'horizontal',
    },
  },
  {}
);
