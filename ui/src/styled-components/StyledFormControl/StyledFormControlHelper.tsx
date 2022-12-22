import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        mt: '$2',
      },
    },
  },
  {}
);
