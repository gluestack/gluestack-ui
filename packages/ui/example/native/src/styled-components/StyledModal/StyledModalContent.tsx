import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        // shadow: 1
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,

        rounded: '$lg',
        overflow: 'hidden',
        //@ts-ignore

        bg: '$muted.50',

        width: '50%',
        maxWidth: 450,
      },
    },
  },
  {}
);
