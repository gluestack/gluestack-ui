// @ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';
export default styled(
  View,
  {
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      orientation: {
        horizontal: {
          w: '100%',
          _track: {
            width: '100%',
          },
          _filledTrack: {
            height: '100%',
          },
        },
        vertical: {
          h: '100%',
          _track: {
            height: '100%',
          },
          _filledTrack: {
            width: '100%',
          },
        },
      },
      isReversed: {
        true: {},
        false: {},
      },
      size: {
        sm: {
          _thumb: {
            h: '$4',
            w: '$4',
          },
        },
        md: {
          _thumb: {
            h: '$5',
            w: '$5',
          },
        },
        lg: {
          _thumb: {
            h: '$6',
            w: '$6',
          },
        },
      },
    },
    compoundVariants: [
      {
        orientation: 'horizontal',
        size: 'sm',
        value: {
          _track: {
            height: '$1',
            flexDirection: 'row',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'sm',
        isReversed: true,
        value: {
          _track: {
            height: '$1',
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'md',
        value: {
          _track: {
            height: 5,
            flexDirection: 'row',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'md',
        isReversed: true,
        value: {
          _track: {
            height: 5,
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'lg',
        value: {
          _track: {
            height: '$1.5',
            flexDirection: 'row',
          },
        },
      },
      {
        orientation: 'horizontal',
        size: 'lg',
        isReversed: true,
        value: {
          _track: {
            height: '$1.5',
            flexDirection: 'row-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'sm',
        value: {
          _track: {
            w: '$1',
            flexDirection: 'column-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'sm',
        isReversed: true,
        value: {
          _track: {
            width: '$1',
            flexDirection: 'column',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'md',
        value: {
          _track: {
            width: 5,
            flexDirection: 'column-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'md',
        isReversed: true,
        value: {
          _track: {
            width: 5,
            flexDirection: 'column',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'lg',
        value: {
          _track: {
            width: '$1.5',
            flexDirection: 'column-reverse',
          },
        },
      },
      {
        orientation: 'vertical',
        size: 'lg',
        isReversed: true,
        value: {
          _track: {
            width: '$1.5',
            flexDirection: 'column',
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
      size: 'md',
      orientation: 'horizontal',
    },
  },
  {
    componentName: 'Slider',
    descendantStyle: ['_thumb', '_track', '_filledTrack'],
  },
  {
    aliases: {
      orientation: 'orientation',
    },
  }
);
