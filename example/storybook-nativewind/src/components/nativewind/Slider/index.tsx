import { createSlider } from '@gluestack-ui/slider';
import { Pressable } from 'react-native';
import { View, Platform } from 'react-native';
import React from 'react';
import {
  tva,
  withStyleContextAndStates,
  useStyleContext,
  withStates,
} from '@gluestack-ui/nativewind-utils';

export const UISlider = createSlider({
  Root: withStyleContextAndStates(View),
  Thumb: Platform.OS === 'web' ? View : withStates(View),
  Track: Pressable,
  FilledTrack: Platform.OS === 'web' ? View : withStates(View),
  ThumbInteraction: View,
});

const sliderStyle = tva({
  base: 'justify-center items-center data-[disabled=true]:web:cursor-not-allowed data-[disabled=true]:web:opacity-40 data-[disabled=true]:web:pointer-events-auto',

  variants: {
    isReversed: {
      true: {},
      false: {},
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
});
// const StyledRoot = styled(
//   View,
//   {
//     justifyContent: 'center',
//     alignItems: 'center',
//     variants: {
//       orientation: {
//         horizontal: {
//           w: '$full',
//           _track: {
//             width: '$full',
//           },
//           _filledTrack: {
//             height: '$full',
//           },
//         },
//         vertical: {
//           h: '$full',
//           _track: {
//             height: '$full',
//           },
//           _filledTrack: {
//             width: '$full',
//           },
//         },
//       },
//       isReversed: {
//         true: {},
//         false: {},
//       },
//       size: {
//         sm: {
//           _thumb: {
//             h: '$4',
//             w: '$4',
//           },
//         },
//         md: {
//           _thumb: {
//             h: '$5',
//             w: '$5',
//           },
//         },
//         lg: {
//           _thumb: {
//             h: '$6',
//             w: '$6',
//           },
//         },
//       },
//     },
//     compoundVariants: [
//       {
//         orientation: 'horizontal',
//         size: 'sm',
//         value: {
//           _track: {
//             height: '$1',
//             flexDirection: 'row',
//           },
//         },
//       },
//       {
//         orientation: 'horizontal',
//         size: 'sm',
//         isReversed: true,
//         value: {
//           _track: {
//             height: '$1',
//             flexDirection: 'row-reverse',
//           },
//         },
//       },
//       {
//         orientation: 'horizontal',
//         size: 'md',
//         value: {
//           _track: {
//             height: 5,
//             flexDirection: 'row',
//           },
//         },
//       },
//       {
//         orientation: 'horizontal',
//         size: 'md',
//         isReversed: true,
//         value: {
//           _track: {
//             height: 5,
//             flexDirection: 'row-reverse',
//           },
//         },
//       },
//       {
//         orientation: 'horizontal',
//         size: 'lg',
//         value: {
//           _track: {
//             height: '$1.5',
//             flexDirection: 'row',
//           },
//         },
//       },
//       {
//         orientation: 'horizontal',
//         size: 'lg',
//         isReversed: true,
//         value: {
//           _track: {
//             height: '$1.5',
//             flexDirection: 'row-reverse',
//           },
//         },
//       },
//       {
//         orientation: 'vertical',
//         size: 'sm',
//         value: {
//           _track: {
//             w: '$1',
//             flexDirection: 'column-reverse',
//           },
//         },
//       },
//       {
//         orientation: 'vertical',
//         size: 'sm',
//         isReversed: true,
//         value: {
//           _track: {
//             width: '$1',
//             flexDirection: 'column',
//           },
//         },
//       },
//       {
//         orientation: 'vertical',
//         size: 'md',
//         value: {
//           _track: {
//             width: 5,
//             flexDirection: 'column-reverse',
//           },
//         },
//       },
//       {
//         orientation: 'vertical',
//         size: 'md',
//         isReversed: true,
//         value: {
//           _track: {
//             width: 5,
//             flexDirection: 'column',
//           },
//         },
//       },
//       {
//         orientation: 'vertical',
//         size: 'lg',
//         value: {
//           _track: {
//             width: '$1.5',
//             flexDirection: 'column-reverse',
//           },
//         },
//       },
//       {
//         orientation: 'vertical',
//         size: 'lg',
//         isReversed: true,
//         value: {
//           _track: {
//             width: '$1.5',
//             flexDirection: 'column',
//           },
//         },
//       },
//     ],
//     _web: {
//       ':disabled': {
//         // @ts-ignore
//         pointerEvents: 'all !important',
//         cursor: 'not-allowed',
//         opacity: 0.4,
//       },
//     },
//     defaultProps: {
//       size: 'md',
//       orientation: 'horizontal',
//     },
//   },
//   {
//     descendantStyle: ['_thumb', '_track', '_filledTrack'],
//   }
// );

const sliderThumbStyle = tva({
  base: 'bg-primary-500 absolute rounded-full focus:bg-primary-600 active:bg-primary-600 hover:bg-primary-600 data-[disabled=true]:bg-primary-500 web:cursor-pointer web:active:outline-4 web:active:outline web:active:outline-primary-400 web:focus:outline-4 web:focus:outline web:focus:outline-primary-400 shadow',

  parentVariants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
});

// const StyledThumb = styled(
//   View,
//   {
//     'bg': '$primary500',
//     'position': 'absolute',
//     'borderRadius': '$full',

//     ':focus': {
//       bg: '$primary600',
//     },

//     ':active': {
//       bg: '$primary600',
//     },

//     ':hover': {
//       bg: '$primary600',
//     },

//     ':disabled': {
//       bg: '$primary500',
//     },

//     '_web': {
//       //@ts-ignore
//       'cursor': 'pointer',
//       ':active': {
//         outlineWidth: 4,
//         outlineStyle: 'solid',
//         outlineColor: '$primary400',
//       },
//       ':focus': {
//         outlineWidth: 4,
//         outlineStyle: 'solid',
//         outlineColor: '$primary400',
//       },
//     },

//     'defaultProps': {
//       hardShadow: '1',
//     },
//   },
//   {
//     ancestorStyle: ['_thumb'],
//   }
// );

const sliderTrackStyle = tva({
  base: 'bg-background-300 rounded-lg overflow-hidden',
  variants: {
    variant: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
  },
  parentVariants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
  },
  parentCompoundVariants: [
    {
      value: {
        class: 'h-1 flex-row',
      },
    },
    {
      value: {
        class: 'h-1 flex-row-reverse',
      },
    },
    {
      value: {
        class: 'h-[5px] flex-row',
      },
    },
    {
      value: {
        class: 'h-[5px] flex-row-reverse',
      },
    },
    {
      value: {
        class: 'h-1.5 flex-row',
      },
    },
    {
      value: {
        class: 'h-1.5 flex-row-reverse',
      },
    },
    {
      value: {
        class: 'w-1 flex-col-reverse',
      },
    },
    {
      value: {
        class: 'w-1 flex-col',
      },
    },
    {
      value: {
        class: 'w-[5px] flex-col-reverse',
      },
    },
    {
      value: {
        class: 'w-[5px] flex-col',
      },
    },
    {
      value: {
        class: 'w-1.5 flex-col-reverse',
      },
    },
    {
      value: {
        class: 'w-1.5 flex-col',
      },
    },
  ],
});

const sliderFilledTrackStyle = tva({
  base: 'bg-primary-500 focus:bg-primary-600 active:bg-primary-600 hover:bg-primary-600',
  parentVariants: {
    orientation: {
      horizontal: 'h-full',
      vertical: 'w-full',
    },
  },
});

// const sliderThumbInteractionStyle = tva({
//   base: 'rounded-full -z-10',
// });

export const Slider = React.forwardRef(
  (
    { className, size = 'md', orientation = 'horizontal', ...props }: any,
    ref
  ) => {
    return (
      <UISlider
        ref={ref}
        {...props}
        className={sliderStyle({ size, orientation, class: className })}
        context={{ size, orientation }}
      />
    );
  }
);

export const SliderThumb = React.forwardRef(
  ({ className, variant, size, ...props }: any, ref) => {
    const { variant: parentVariant, size: parentSize } = useStyleContext();

    return (
      <UISlider.Thumb
        ref={ref}
        {...props}
        className={sliderThumbStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
          },
          variant,
          size,
          class: className,
        })}
      />
    );
  }
);

export const SliderTrack = React.forwardRef(
  ({ className, variant, ...props }: any, ref) => {
    const { variant: parentVariant } = useStyleContext();

    return (
      <UISlider.Track
        ref={ref}
        {...props}
        className={sliderTrackStyle({
          parentVariants: {
            variant: parentVariant,
          },
          variant,
          class: className,
        })}
      />
    );
  }
);

export const SliderFilledTrack = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const { variant: parentVariant } = useStyleContext();

    return (
      <UISlider.FilledTrack
        ref={ref}
        {...props}
        className={sliderFilledTrackStyle({
          parentVariants: {
            variant: parentVariant,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);
