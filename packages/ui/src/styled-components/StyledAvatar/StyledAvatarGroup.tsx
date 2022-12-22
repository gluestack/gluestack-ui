import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        position: 'relative',
      },
    },
  },
  {},
  config
);
