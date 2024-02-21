import React from 'react';
import { createTextarea } from '@gluestack-ui/textarea';
import { View, TextInput } from 'react-native';
import {
  tva,
  withStyleContextAndStates,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';

const UITextarea = createTextarea({
  // @ts-ignore
  Root: withStyleContextAndStates(View),
  Input: TextInput,
});

// @ts-ignore
cssInterop(UITextarea, { className: 'style' });
cssInterop(UITextarea.Input, { className: 'style' });

const textareaStyle = tva({
  base: 'w-full h-[100px] border border-background-300 rounded-sm hover:border-outline-400 hover:border-primary-700 focus:border-primary-700 disabled:opacity-40 disable:border-background-300',

  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
      // _input: {
      //   fontSize: '$lg',
      // },
      //  {
      //   _input: {
      //     fontSize: '$md',
      //   },
      // },
      // {
      //   _input: {
      //     fontSize: '$sm',
      //   },
      // },
      xl: '',
      // {
      //   _input: {
      //     fontSize: '$xl',
      //   },
      // },
    },
    variant: {
      default:
        'focus:border-primary-700 focus:border-primary-700 focus:web:shadows-sm invalid:border-error-700 invalid:web:shadows-sm',
      //  {
      // '_input': {
      //   _web: {
      //     outlineWidth: '0',
      //     outline: 'none',
      //   },
      // },

      // ':focus': {
      //   borderColor: '$primary700',
      //   _web: {
      //     boxShadow: 'inset 0 0 0 1px $primary700',
      //   },
      // },

      // ':invalid': {
      //   'borderColor': '$error700',
      //   '_web': {
      //     boxShadow: 'inset 0 0 0 1px $error700',
      //   },
      //   ':hover': {
      //     borderColor: '$error700',
      //   },
      //   ':focus': {
      //     ':hover': {
      //       borderColor: '$primary700',
      //       _web: {
      //         boxShadow: 'inset 0 0 0 1px $primary700',
      //       },
      //     },
      //   },
      //   ':disabled': {
      //     ':hover': {
      //       borderColor: '$error700',
      //       _web: {
      //         boxShadow: 'inset 0 0 0 1px $error700',
      //       },
      //     },
      //   },
      // },
      // },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
});

const textareaInputStyle = tva({
  base: 'p-2 flex-1 color-typography-900 align-text-top',

  // /     p: '$2',
  //     color: '$text900',
  //     textAlignVertical: 'top',
  //     flex: 1,

  //     props: {
  //       // @ts-ignore
  //       multiline: true,
  //       placeholderTextColor: '$text500',
  //     },

  //     _web: {
  //       'cursor': 'text',
  //       ':disabled': {
  //         cursor: 'not-allowed',
  //       },
  //     },
  //   },
  //   {
  //     ancestorStyle: ['_input'],
  //     resolveProps: ['placeholderTextColor'],
  //   },
  //   {
  //     propertyTokenMap: {
  //       placeholderTextColor: 'colors',
  //     },
  //   }
});

// const StyledRoot =
//   {

//     '_input': {
//       p: '$3',
//       _web: {
//         outlineWidth: 0,
//         outline: 'none',
//       },
//     },

//     ':hover': {
//       borderColor: '$border400',
//     },

//     ':focus': {
//       'borderColor': '$primary700',
//       ':hover': {
//         borderColor: '$primary700',
//       },
//     },

//     ':disabled': {
//       'opacity': 0.4,
//       ':hover': {
//         borderColor: '$background300',
//       },
//     },

//     'variants': {
//       size: {
//         xl: {
//           _input: {
//             fontSize: '$xl',
//           },
//         },

//         lg: {
//           _input: {
//             fontSize: '$lg',
//           },
//         },
//         md: {
//           _input: {
//             fontSize: '$md',
//           },
//         },
//         sm: {
//           _input: {
//             fontSize: '$sm',
//           },
//         },
//       },
//       variant: {
//         default: {
//           '_input': {
//             _web: {
//               outlineWidth: '0',
//               outline: 'none',
//             },
//           },

//           ':focus': {
//             borderColor: '$primary700',
//             _web: {
//               boxShadow: 'inset 0 0 0 1px $primary700',
//             },
//           },

//           ':invalid': {
//             'borderColor': '$error700',
//             '_web': {
//               boxShadow: 'inset 0 0 0 1px $error700',
//             },
//             ':hover': {
//               borderColor: '$error700',
//             },
//             ':focus': {
//               ':hover': {
//                 borderColor: '$primary700',
//                 _web: {
//                   boxShadow: 'inset 0 0 0 1px $primary700',
//                 },
//               },
//             },
//             ':disabled': {
//               ':hover': {
//                 borderColor: '$error700',
//                 _web: {
//                   boxShadow: 'inset 0 0 0 1px $error700',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },

//     'defaultProps': {
//       variant: 'default',
//       size: 'md',
//     },
//   },

// const StyledInput = styled(
//   TextInput,
//   {
//     p: '$2',
//     color: '$text900',
//     textAlignVertical: 'top',
//     flex: 1,

//     props: {
//       // @ts-ignore
//       multiline: true,
//       placeholderTextColor: '$text500',
//     },

//     _web: {
//       'cursor': 'text',
//       ':disabled': {
//         cursor: 'not-allowed',
//       },
//     },
//   },
//   {
//     ancestorStyle: ['_input'],
//     resolveProps: ['placeholderTextColor'],
//   },
//   {
//     propertyTokenMap: {
//       placeholderTextColor: 'colors',
//     },
//   }
// );

export const Textarea = React.forwardRef(
  ({ className, variant = 'solid', size = 'md', ...props }: any, ref) => {
    return (
      <UITextarea
        ref={ref}
        {...props}
        className={textareaStyle({ variant, size, class: className })}
        context={{ variant, size }}
      />
    );
  }
);

export const TextareaInput = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext();

    return (
      <UITextarea.Input
        ref={ref}
        {...props}
        className={textareaInputStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
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
