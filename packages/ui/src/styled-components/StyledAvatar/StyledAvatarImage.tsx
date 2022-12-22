import { config } from '../ui.config';
import { Image } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Image,
  {
    baseStyle: {
      style: {
        w: '100%',
        h: '100%',
        borderRadius: 9999,
      },
    },
  },
  {},
  config
);
