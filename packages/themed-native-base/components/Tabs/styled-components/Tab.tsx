import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    // @ts-ignore
    'bg': 'transparent',
    '_web': {
      outlineWidth: 0,
    },

    'variants': {
      size: {
        md: {
          // @ts-ignore
          px: '$4',
          // @ts-ignore
          py: '$2',

          _text: {
            // @ts-ignore
            fontSize: '$md',
            // @ts-ignore
            lineHeight: '$md',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
    ':hover': {
      // backgroundColor: '$secondary50_alpha_20',
      // @ts-ignore
      borderRadius: '$full',
    },
    ':active': {
      // backgroundColor: '$secondary50_alpha_10',
      // @ts-ignore
      borderRadius: '$full',
    },
    ':focus': {
      // backgroundColor: '$secondary50_alpha_20',
      // @ts-ignore
      borderRadius: '$full',
    },
    ':disabled': {
      opacity: 0.5,
    },

    '_dark': {
      ':hover': {
        backgroundColor: '$backgroundLight500',
        // @ts-ignore
        borderRadius: '$full',
      },
      ':active': {
        backgroundColor: '$backgroundLight400',
        // @ts-ignore
        borderRadius: '$full',
      },
      ':focus': {
        backgroundColor: '$backgroundLight400',
        // @ts-ignore
        borderRadius: '$full',
      },
      ':disabled': {
        opacity: 0.5,
      },
    },
  },
  { descendantStyle: ['_title', '_icon'], ancestorStyle: ['_tab'] }
);
