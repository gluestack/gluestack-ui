import { styled } from '@dank-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    '_web': {
      'outlineWidth': 0,
      ':focusVisible': {
        outlineWidth: '1',
        boxShadow: `$secondary500 0px 0px 0px 1px`,
      },
    },

    'variants': {
      variant: {
        primary: {
          bg: 'transparent',
        },
      },

      size: {
        md: {
          p: '$0.5',

          _spinner: {
            w: '$5',
            h: '$5',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
      variant: 'primary',
    },

    ':disabled': {
      opacity: 0.5,
    },

    '_dark': {
      _web: {
        ':focusVisible': {
          outlineWidth: 0,
          boxShadow: `$primary500 0px 0px 0px 2px`,
        },
      },
    },
  },
  {
    descendantStyle: ['_text', '_spinner'],
  }
);
