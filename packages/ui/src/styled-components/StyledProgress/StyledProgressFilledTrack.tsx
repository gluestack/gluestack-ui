import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: { bg: '$red500', borderRadius: 999 },
      // descendants: {
      //   _progressbar: {
      //     h: '$3',
      //   },
      // },
    },
  },
  {}
);
