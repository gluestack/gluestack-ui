import { createDivider } from '@gluestack-ui/divider';
import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

const StyledRoot = styled(
  View,
  {
    bg: '$background200',

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
  {}
);

export const Divider = createDivider({ Root: StyledRoot });
