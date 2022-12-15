import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary.500',
        borderRadius: 4, // '4px'
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: 12,
        py: 10,
      },
      state: {
        hover: {
          style: { bg: '$primary.700' },
        },
        active: {
          style: { bg: '$primary.900' },
        },
      },
    },
  },
  {}
);
