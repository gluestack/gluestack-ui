import { createStyle } from '@gluestack-style/react';

export const RangeSlider = createStyle({
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    orientation: {
      horizontal: {
        w: '$full',
        _track: {
          width: '$full',
        },
        _filledTrack: {
          height: '$full',
        },
      },
      vertical: {
        h: '$full',
        _track: {
          height: '$full',
        },
        _filledTrack: {
          width: '$full',
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
});
