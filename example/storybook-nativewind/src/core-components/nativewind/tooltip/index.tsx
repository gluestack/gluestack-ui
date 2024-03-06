import { createTooltip } from '@gluestack-ui/tooltip';
import {
  AnimatePresence,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { View, Text } from 'react-native';
import { tva, withStyleContext } from '@gluestack-ui/nativewind-utils';
import React from 'react';

export const UITooltip = createTooltip({
  Root: withStyleContext(View),
  Content: AnimatedView,
  Text: Text,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

const tooltipStyle = tva({
  base: 'w-full h-full web:pointer-events-none',
});

// const StyledRoot = styled(
//   View,
//   {
//     width: '$full',
//     height: '$full',
//     _web: {
//       pointerEvents: 'none',
//     },
//   },
//   {}
// );

const tooltipContentStyle = tva({
  base: 'py-1 px-3 rounded-sm bg-background-900 web:pointer-events-auto shadow',
});

// const StyledContent = styled(
//   AnimatedView,
//   {
//     ':initial': {
//       opacity: 0,
//       scale: 0.5,
//     },

//     ':animate': {
//       opacity: 1,
//       scale: 1,
//     },

//     ':exit': {
//       opacity: 0,
//       scale: 0.5,
//     },

//     ':transition': {
//       type: 'spring',
//       damping: 18,
//       stiffness: 250,
//       opacity: {
//         type: 'timing',
//         duration: 250,
//       },
//     },

//     'py': '$1',
//     'px': '$3',
//     'borderRadius': '$sm',
//     'bg': '$background900',

//     '_text': {
//       fontSize: '$xs',
//       color: '$text50',
//     },

//     '_web': {
//       pointerEvents: 'auto',
//     },

//     'defaultProps': {
//       hardShadow: '2',
//     },
//   },
//   {
//     descendantStyle: ['_text'],
//   }
// );

const tooltipTextStyle = tva({
  base: 'font-normal tracking-normal text-red-400 web:select-none text-xs text-text-50',

  variants: {
    isTruncated: {
      true: {
        props: 'line-clamp-1 truncate',
      },
    },
  },
  bold: {
    true: 'font-bold',
  },
  underline: {
    true: 'underline',
  },
  strikeThrough: {
    true: 'line-through',
  },
  size: {
    '2xs': 'text-2xs',
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  },
  sub: {
    true: 'text-xs',
  },
  italic: {
    true: 'italic',
  },
  highlight: {
    true: 'bg-yellow-500',
  },
});

// const StyledText = styled(
//   Text,
//   {
//     fontWeight: '$normal',
//     fontStyle: 'normal',
//     letterSpacing: '$md',

//     variants: {
//       isTruncated: {
//         true: {
//           props: {
//             // @ts-ignore
//             numberOfLines: 1,
//             ellipsizeMode: 'tail',
//           },
//         },
//       },
//       bold: {
//         true: {
//           fontWeight: '$bold',
//         },
//       },
//       underline: {
//         true: {
//           textDecorationLine: 'underline',
//         },
//       },
//       strikeThrough: {
//         true: {
//           textDecorationLine: 'line-through',
//         },
//       },
//       size: {
//         '2xs': {
//           fontSize: '$2xs',
//         },
//         'xs': {
//           fontSize: '$xs',
//         },

//         'sm': {
//           fontSize: '$sm',
//         },

//         'md': {
//           fontSize: '$md',
//         },

//         'lg': {
//           fontSize: '$lg',
//         },

//         'xl': {
//           fontSize: '$xl',
//         },

//         '2xl': {
//           fontSize: '$2xl',
//         },

//         '3xl': {
//           fontSize: '$3xl',
//         },

//         '4xl': {
//           fontSize: '$4xl',
//         },

//         '5xl': {
//           fontSize: '$5xl',
//         },

//         '6xl': {
//           fontSize: '$6xl',
//         },
//       },
//       sub: {
//         true: {
//           fontSize: '$xs',
//         },
//       },
//       italic: {
//         true: {
//           fontStyle: 'italic',
//         },
//       },
//       highlight: {
//         true: {
//           bg: '$yellow500',
//         },
//       },
//     },

//     defaultProps: {
//       size: 'md',
//     },
//     color: '$red400',
//     fontFamily: '$body',
//     _web: {
//       userSelect: 'none',
//     },
//   },
//   {
//     ancestorStyle: ['_text'],
//   }
// );

export const Tooltip = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <UITooltip
      ref={ref}
      {...props}
      className={tooltipStyle({ class: className })}
    />
  );
});

export const TooltipContent = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UITooltip.Content
        ref={ref}
        {...props}
        className={tooltipContentStyle({
          class: className,
        })}
      />
    );
  }
);

export const TooltipText = React.forwardRef(
  ({ className, size = 'md', ...props }: any, ref) => {
    return (
      <UITooltip.Text
        ref={ref}
        {...props}
        className={tooltipTextStyle({ size, class: className })}
        context={{ size }}
      />
    );
  }
);
