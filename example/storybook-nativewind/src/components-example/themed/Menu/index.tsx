import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { createMenu } from '@gluestack-ui/menu';
import { styled } from '@gluestack-style/react';
import { AnimatedView } from '@gluestack-style/animation-resolver';
import { Pressable, Text } from 'react-native';

const StyledRoot = styled(
  AnimatedView,
  {
    ':initial': {
      opacity: 0,
    },

    ':animate': {
      opacity: 1,
    },

    ':exit': {
      opacity: 0,
    },

    ':transition': {
      type: 'spring',
      damping: 18,
      stiffness: 250,
      // @ts-ignore
      opacity: {
        type: 'timing',
        duration: 200,
      },
    },

    'minWidth': 200,
    'py': '$2',
    'rounded': '$sm',
    'bg': '$background0',

    'defaultProps': {
      softShadow: '3',
    },
  },
  {}
);

const StyledItem = styled(
  Pressable,
  {
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',

    ':hover': {
      bg: '$background100',
    },

    ':disabled': {
      'opacity': 0.4,

      '_web': {
        cursor: 'not-allowed',
      },

      ':focus': {
        bg: 'transparent',
      },
    },

    ':active': {
      bg: '$background200',
    },

    ':focus': {
      bg: '$background100',
      // @ts-ignore
      outlineWidth: '$0',
      outlineStyle: 'none',
    },

    ':focusVisible': {
      // @ts-ignore
      outlineWidth: '$0.5',

      outlineColor: '$primary700',
      outlineStyle: 'solid',
    },

    '_web': {
      cursor: 'pointer',
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledBackdrop = styled(
  Pressable,
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // use this for when you want to give background colour to backdrop
    // opacity: 0.5,
    // bg: '$background500',
    _web: {
      cursor: 'default',
    },
  },
  {}
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
const StyledLabel = styled(
  StyledText,
  {
    color: '$text700',
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
  { ancestorStyle: ['_text'] }
);
export const Menu = createMenu({
  Root: StyledRoot,
  Item: StyledItem,
  Label: StyledLabel,
  Backdrop: StyledBackdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});
export const MenuItem = Menu.Item;
export const MenuItemLabel = Menu.ItemLabel;
