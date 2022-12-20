import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        px: 12,
        py: 8,
        color: '$text500',
        bg: '$gray100',
      },
    },
  },
  {}
);
