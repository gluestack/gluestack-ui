import { styled } from '../../styled';
// @ts-nocheck
import { View } from 'react-native';

export default styled(
  View,
  {
    h: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      orientation: {
        horizontal: {
          _track: {
            width: '100%',
          },
        },
        vertical: {
          _track: {
            height: '100%',
          },
        },
      },

      size1: {
        // sm: {
        //   _thumb: {
        //     h: '$4',
        //     w: '$4',
        //   },
        //   _track: {
        //     props: {
        //       sliderSize: 'sm',
        //     },
        //   },
        // },
        md: {
          // bg: '$red400',
          // _thumb: {
          //   h: '$5',
          //   w: '$5',
          // },
        },
        lg: {
          // _thumb: {
          //   h: '$6',
          //   w: '$6',
          // },
          // _track: {
          //   props: {
          //     sliderSize: 'lg',
          //   },
          // },
        },
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        size1: 'md',
        value: {
          _track: {
            height: 10,
          },
        },
      },
      {
        orientation: 'vertical',
        size1: 'md',
        value: {
          _track: {
            width: 10,
          },
        },
      },
    ],
    _web: {
      ':disabled': {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    },
    defaultProps: {
      size1: 'md',
    },
  },
  {
    descendantStyle: ['_thumb', '_track'],
  },
  {
    aliases: {
      orientation: 'orientation',
    },
  }
);
