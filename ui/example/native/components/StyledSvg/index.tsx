import { styled } from '@gluestack/styled';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    baseStyle: {
      style: {
        bg: '$trueGray.900',
        color: '$white',
        h: 24,
        w: 24,
        borderRadius: 10,
        p: 12,
      },
    },
  },
  {}
);
