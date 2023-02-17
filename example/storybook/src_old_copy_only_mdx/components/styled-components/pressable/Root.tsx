import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    _web: {
      'outlineWidth': 0,

      ':focusVisible': {
        outlineWidth: 0,
        shadow: '$3',

        _dark: {
          shadow: '$3',
        },
      },
    },
  },
  {}
);
