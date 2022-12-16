import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        padding: '$4',
        bg: '$amber.500',
        justifyContent: 'flex-end',
        flex: 1,
        height: '100%',
        borderTopStartRadius: 20,
        marginHorizontal: 8,
        //@ts-ignore
        userSelect: 'none',
      },
    },
  },
  {}
);
