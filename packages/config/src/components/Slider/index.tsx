import { styled } from '@gluestack-style/react';
import { createSlider } from '@gluestack-ui/slider';
import { Pressable } from 'react-native';
import { View } from 'react-native';

const StyledRoot = styled(
  View,
  {
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
  },
  {
    descendantStyle: ['_thumb', '_track', '_filledTrack'],
  }
);

const StyledThumb = styled(
  View,
  {
    'bg': '$primary500',
    'position': 'absolute',
    'borderRadius': '$full',

    ':focus': {
      bg: '$primary600',
    },

    ':active': {
      bg: '$primary600',
    },

    ':hover': {
      bg: '$primary600',
    },

    ':disabled': {
      bg: '$primary500',
    },

    '_web': {
      //@ts-ignore
      'cursor': 'pointer',
      ':active': {
        outlineWidth: 4,
        outlineStyle: 'solid',
        outlineColor: '$primary400',
      },
      ':focus': {
        outlineWidth: 4,
        outlineStyle: 'solid',
        outlineColor: '$primary400',
      },
    },

    'defaultProps': {
      hardShadow: '1',
    },
  },
  {
    ancestorStyle: ['_thumb'],
  }
);

const StyledTrack = styled(
  Pressable,
  {
    bg: '$background300',

    borderRadius: '$lg',
    overflow: 'hidden',

    variants: {
      variant: {
        horizontal: {
          width: '100%',
        },
        vertical: {
          height: '100%',
        },
      },
    },
  },
  {
    ancestorStyle: ['_track'],
  }
);

const StyledFilledTrack = styled(
  View,
  {
    'bg': '$primary500',

    ':focus': {
      bg: '$primary600',
    },

    ':active': {
      bg: '$primary600',
    },

    ':hover': {
      bg: '$primary600',
    },
  },
  {
    ancestorStyle: ['_filledTrack'],
  }
);

const StyledThumbInteraction = styled(View, {
  borderRadius: 9999,
  zIndex: -1,
});

export const Slider = createSlider({
  Root: StyledRoot,
  Thumb: StyledThumb,
  Track: StyledTrack,
  FilledTrack: StyledFilledTrack,
  ThumbInteraction: StyledThumbInteraction,
});
export const SliderThumb = Slider.Thumb;
export const SliderTrack = Slider.Track;
export const SliderFilledTrack = Slider.FilledTrack;
