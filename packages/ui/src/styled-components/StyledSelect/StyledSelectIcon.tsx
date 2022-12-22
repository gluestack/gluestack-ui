import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        w: 12,
        h: 12,
      },
    },
  },
  {},
  config
);
