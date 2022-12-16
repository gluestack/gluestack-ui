import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // @ts-ignore
      },
    },
  },
  {}
);
