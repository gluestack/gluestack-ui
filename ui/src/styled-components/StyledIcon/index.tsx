import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    baseStyle: {
      style: {
        w: 20,
        h: 20,
      },
    },
    variants: {
      modalHeader: {
        style: { color: '$muted500', h: 16, w: 16 },
      },
    },
  },
  {},
  config
);
