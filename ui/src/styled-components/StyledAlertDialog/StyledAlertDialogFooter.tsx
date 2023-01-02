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
        bg: '$muted50',
        borderColor: '$muted300',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted800',
            borderColor: '$muted700',
          },
        },
      },
    },
  },
  {}
);
