import { Image } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Image,
  {
    baseStyle: {
      style: {
        h: 100,
        w: 100,
        borderRadius: 9999,
      },
    },
  },
  {}
);
