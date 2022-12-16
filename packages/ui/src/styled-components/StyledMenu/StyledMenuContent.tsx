// import { Popper } from '@gluestack/ui-styled';
import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$gray900',
        padding: 8,
        borderRadius: 4,
        w: 190,
      },
    },
  },
  {}
);
