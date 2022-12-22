import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        py: '$3',
        mt: -4,
        w: '100%',
        alignItems: 'center',
      },
    },
  },
  {},
  config
);
