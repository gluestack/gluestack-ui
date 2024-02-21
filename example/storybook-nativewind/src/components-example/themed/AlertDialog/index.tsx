import {
  AnimatePresence,
  AnimatedView,
  AnimatedPressable,
} from '@gluestack-style/animation-resolver';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';
import { View, Pressable, ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';
const StyledRoot = styled(
  View,
  {
    w: '$full',
    h: '$full',
    justifyContent: 'center',
    alignItems: 'center',

    variants: {
      size: {
        xs: { _content: { w: '60%', maxWidth: 360 } },
        sm: { _content: { w: '70%', maxWidth: 420 } },
        md: { _content: { w: '80%', maxWidth: 510 } },
        lg: { _content: { w: '90%', maxWidth: 640 } },
        full: { _content: { w: '$full' } },
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

const StyledContent = styled(
  AnimatedView,
  {
    'bg': '$background50',
    'rounded': '$lg',
    'overflow': 'hidden',

    //@ts-ignore
    ':initial': {
      scale: 0.9,
      opacity: 0,
    },

    ':animate': {
      scale: 1,
      opacity: 1,
    },

    ':exit': {
      scale: 0.9,
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

const StyledCloseButton = styled(
  Pressable,
  {
    'zIndex': 1,
    'rounded': '$sm',
    'p': '$2',

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
const StyledHeader = styled(
  View,
  {
    p: '$4',
    borderColor: '$border300',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  {}
);

const StyledFooter = styled(
  View,
  {
    p: '$4',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor: '$border300',
  },
  {}
);
const StyledBody = styled(ScrollView, { px: '$4', py: '$2' }, {});

const StyledBackdrop = styled(
  AnimatedPressable,
  {
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
  },
  {}
);

const AccessibleAlertDialog = createAlertDialog({
  Root: StyledRoot,
  Content: StyledContent,
  CloseButton: StyledCloseButton,
  Header: StyledHeader,
  Footer: StyledFooter,
  Body: StyledBody,
  Backdrop: StyledBackdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

export const AlertDialog = AccessibleAlertDialog;
export const AlertDialogContent = AccessibleAlertDialog.Content;
export const AlertDialogCloseButton = AccessibleAlertDialog.CloseButton;
export const AlertDialogHeader = AccessibleAlertDialog.Header;
export const AlertDialogFooter = AccessibleAlertDialog.Footer;
export const AlertDialogBody = AccessibleAlertDialog.Body;
export const AlertDialogBackdrop = AccessibleAlertDialog.Backdrop;
