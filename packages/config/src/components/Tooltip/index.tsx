import { createTooltip } from '@gluestack-ui/tooltip';
import {
  AnimatePresence,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { styled } from '@gluestack-style/react';
import { View, Text } from 'react-native';

const StyledRoot = styled(
  View,
  {
    width: '$full',
    height: '$full',
    _web: {
      pointerEvents: 'none',
    },
  },
  {}
);

const StyledContent = styled(
  AnimatedView,
  {
    ':initial': {
      opacity: 0,
      scale: 0.5,
    },

    ':animate': {
      opacity: 1,
      scale: 1,
    },

    ':exit': {
      opacity: 0,
      scale: 0.5,
    },

    ':transition': {
      type: 'spring',
      damping: 18,
      stiffness: 250,
      // @ts-ignore
      opacity: {
        type: 'timing',
        duration: 250,
      },
    },

    'py': '$1',
    'px': '$3',
    'borderRadius': '$sm',
    'bg': '$background900',

    '_text': {
      fontSize: '$xs',
      color: '$text50',
    },

    '_web': {
      pointerEvents: 'auto',
    },

    'defaultProps': {
      hardShadow: '2',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledText = styled(
  Text,
  {
    color: '$text700',
    flex: 1,
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
const StyledTooltipText = styled(
  StyledText,
  {
    fontWeight: '$normal',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
    color: '$red400',
    fontFamily: '$body',
    _web: {
      userSelect: 'none',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);

export const Tooltip = createTooltip({
  Root: StyledRoot,
  Content: StyledContent,
  Text: StyledTooltipText,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});
export const TooltipContent = Tooltip.Content;
export const TooltipText = Tooltip.Text;
