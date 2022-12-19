import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$blue500',
        flexDirection: 'row',
        // @ts-ignore
        gap: '36px',
      },
    },
  },
  {}
);
