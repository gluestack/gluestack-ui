import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        //@ts-ignore web only
        pointerEvents: 'box-none',
        bg: '$trueGray700',
        p: '$2',
        borderRadius: 4,
        mb: 4,
      },

      descendants: {},
    },
    defaultProps: {
      //@ts-ignore
      space: 'md',
    },
  },
  {}
);
