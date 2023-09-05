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
          height: '$full',
        },
        horizontal: {
          height: '$px',
          width: '$full',
        },
      },
    },
    defaultProps: {
      orientation: 'horizontal',
    },
  },
  {
    componentName: 'Divider',
  } as const
);
