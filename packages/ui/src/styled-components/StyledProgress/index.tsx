import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export const StyledProgress = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$muted200',
        h: '$2',
        borderRadius: 999,
      },
      colorMode: {
        dark: {
          style: { bg: '$muted500' },
        },
      },
    },
  },
  {},
  config
);
