import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    _web: {
      outlineWidth: 0,
      outline: 'none',

      // ':focus': {
      //   outlineWidth: 0,
      //   boxShadow: '#c084fc 0px 0px 0px 2px',

      //   _dark: {
      //     boxShadow: '#a855f7 0px 0px 0px 2px',
      //   },
      // },
    },
  },
  {}
);
