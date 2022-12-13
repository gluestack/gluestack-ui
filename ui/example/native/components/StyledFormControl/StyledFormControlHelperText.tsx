import { styled } from '@gluestack/styled';
import { View, Text } from 'react-native';

export default styled(
  Text,
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
