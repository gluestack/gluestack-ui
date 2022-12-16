import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        width: '75%',
        maxWidth: '380',
        //@ts-ignore
        shadow: 1,
        borderRadius: 4,
        overflow: 'hidden',
        bg: '$blue50',
      },
    },
  },
  {}
);
