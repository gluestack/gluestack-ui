import { styled } from '@dank-style/react';
// import { config } from '../../../../gluestack.config';
import { Pressable as RNPressable } from 'react-native';

const Pressable = styled(
  RNPressable,
  {
    _web: {
      'outlineWidth': 0,
      'outline': 'none',

      ':focus': {
        outlineWidth: 0,
        boxShadow: '#c084fc 0px 0px 0px 2px',

        _dark: {
          boxShadow: '#a855f7 0px 0px 0px 2px',
        },
      },
    },
  },
  {}
);

export { Pressable as Root };
