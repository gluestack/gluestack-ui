// @ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'w': '100%',
    'h': '100%',
    'justifyContent': 'center',
    'alignItems': 'center',
    'variants': {
      size: {
        sm: {
          //@ts-ignore
          _thumb: {
            h: '$4',
            w: '$4',
          },
        },
        md: {
          //@ts-ignore
          _thumb: {
            h: '$5',
            w: '$5',
          },
        },
        lg: {
          //@ts-ignore
          _thumb: {
            h: '$6',
            w: '$6',
          },
        },
      },
    },
    'defaultProps': {
      size: 'md',
    },
    ':disabled': {
      opacity: 0.4,
      bg: '$primary600_alpha60',
      _dark: {
        opacity: 0.4,
        bg: '$primary600_alpha60',
      },
    },

    '_web': {
      ':disabled': {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_thumb'],
  }
);
