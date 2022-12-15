import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        w: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // @ts-ignore
        p: 12,
      },
    },
  },
  {}
);
