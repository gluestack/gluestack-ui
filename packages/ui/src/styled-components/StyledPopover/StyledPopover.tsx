import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        h: '100%',
        w: '100%',
      },
    },
  },
  {},
  config
);
