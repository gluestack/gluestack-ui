import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      // style: {
      //   w: 10,
      //   h: 10,
      //   bg: '$amber700',
      // },
    },
  },
  {},
  config
);
