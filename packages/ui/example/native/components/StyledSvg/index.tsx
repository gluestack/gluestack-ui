import { styled } from '@gluestack/styled';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    baseStyle: {
      style: {
        w: 16,
        h: 16,
      },
    },
    variants: {
      modalHeader: {
        style: { color: '$muted.500', h: 16, w: 16 },
      },
    },
  },
  {}
);
