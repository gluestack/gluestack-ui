import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    width: '100%',
    justifyContent: 'flex-start',
    p: '$4',
    flexDirection: 'row',
    alignItems: 'center',
    _web: {
      //@ts-ignore
      cursor: 'pointer',
      userSelect: 'none',
    },
    _disabled: {
      _text: {
        opacity: 0.4,
      },
    },
    _hover: {
      bg: '$muted100',
    },
    _active: {
      bg: '$muted200',
    },
    _focusVisible: {
      bg: '$muted300',
      _web: {
        //@ts-ignore
        outline: 'none',
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
