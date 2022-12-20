import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        m: '$2',
        height: 4,
        width: 40,
        bg: '$primary600',
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  {}
);
