import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        bg: '$white',
        borderColor: '$muted200',
        // @ts-ignore
        gap: 12,
      },
    },
  },
  {}
);
