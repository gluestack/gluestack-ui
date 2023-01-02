import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        borderBottomWidth: 1,
        bg: '$muted50',
        borderColor: '$muted200',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted800',
            borderColor: '$muted700',
          },
        },
      },
    },
  },
  {},
  config
);
