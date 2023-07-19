// @ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    h: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      size: {
        sm: {
          _thumb: {
            h: '$4',
            w: '$4',
          },
          _track: {
            props: {
              sliderSize: 'sm',
            },
          },
        },
        md: {
          _thumb: {
            h: '$5',
            w: '$5',
          },
          _track: {
            props: {
              sliderSize: 'md',
            },
          },
        },
        lg: {
          _thumb: {
            h: '$6',
            w: '$6',
          },
          _track: {
            props: {
              sliderSize: 'lg',
            },
          },
        },
      },
    },
    _web: {
      ':disabled': {
        // @ts-ignore
        pointerEvents: 'all !important',
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    },
    defaultProps: {
      size: 'md',
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
