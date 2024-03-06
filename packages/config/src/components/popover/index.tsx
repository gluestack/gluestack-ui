import { View, ScrollView, Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import {
  AnimatedView,
  AnimatedPressable,
  AnimatePresence,
} from '@gluestack-style/animation-resolver';
import { createPopover } from '@gluestack-ui/popover';

const StyledRoot = styled(
  View,
  {
    width: '$full',
    height: '$full',
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
      size: {
        xs: { _content: { width: '60%', maxWidth: 360 } },
        sm: { _content: { width: '70%', maxWidth: 420 } },
        md: { _content: { width: '80%', maxWidth: 510 } },
        lg: { _content: { width: '90%', maxWidth: 640 } },
        full: { _content: { width: '100%' } },
      },
    },

    defaultProps: { size: 'md' },

    _web: {
      pointerEvents: 'box-none',
    },
  },
  {
    descendantStyle: ['_content'],
  }
);

const StyledArrow = styled(AnimatedView, {});

const StyledBackdrop = styled(AnimatedPressable, {
  ':initial': {
    opacity: 0,
  },

  ':animate': {
    opacity: 0.5,
  },

  ':exit': {
    opacity: 0,
  },

  ':transition': {
    // @ts-ignore
    type: 'spring',
    damping: 18,
    stiffness: 250,
    opacity: {
      type: 'timing',
      duration: 250,
    },
  },

  'position': 'absolute',
  'left': 0,
  'top': 0,
  'right': 0,
  'bottom': 0,
  'bg': '$background950',

  // @ts-ignore
  '_web': {
    cursor: 'default',
  },
});

const StyledBody = styled(ScrollView, {
  p: '$4',
  pt: '$2',
});

const StyledCloseButton = styled(
  Pressable,
  {
    'zIndex': 1,
    'p': '$2',
    'rounded': '$sm',

    '_icon': {
      color: '$background400',
    },

    '_text': {
      color: '$background400',
    },

    ':hover': {
      _icon: {
        color: '$background700',
      },
      _text: {
        color: '$background700',
      },
    },

    ':active': {
      _icon: {
        color: '$background900',
      },
      _text: {
        color: '$background900',
      },
    },

    ':focusVisible': {
      bg: '$background100',

      _icon: {
        color: '$background900',
      },

      _text: {
        color: '$background900',
      },
    },

    '_web': {
      outlineWidth: 0,
      cursor: 'pointer',
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
  }
);

const StyledContent = styled(
  AnimatedView,
  {
    'bg': '$background50',
    'rounded': '$lg',
    'overflow': 'hidden',

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
        duration: 250,
      },
    },

    'defaultProps': {
      softShadow: '3',
    },
  },
  {
    ancestorStyle: ['_content'],
  }
);

const StyledFooter = styled(View, {
  p: '$4',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderTopWidth: 1,
  borderColor: '$border300',
});

const StyledHeader = styled(View, {
  p: '$4',
  pb: '$2',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
});

const UIPopover = createPopover({
  Root: StyledRoot,
  Arrow: StyledArrow,
  Content: StyledContent,
  Header: StyledHeader,
  Footer: StyledFooter,
  Body: StyledBody,
  Backdrop: StyledBackdrop,
  CloseButton: StyledCloseButton,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

export const Popover = UIPopover;
export const PopoverArrow = UIPopover.Arrow;
export const PopoverContent = UIPopover.Content;
export const PopoverHeader = UIPopover.Header;
export const PopoverFooter = UIPopover.Footer;
export const PopoverBody = UIPopover.Body;
export const PopoverBackdrop = UIPopover.Backdrop;
export const PopoverCloseButton = UIPopover.CloseButton;
