import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary500',
        borderRadius: 4, // '4px'
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: 12,
        py: 10,
      },
      state: {
        hover: {
          style: { bg: '$primary700' },
        },
        active: {
          style: { bg: '$primary900' },
        },
      },
    },
  },
  {}
);
