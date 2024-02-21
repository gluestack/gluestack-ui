import { createModal } from '@gluestack-ui/modal';
import {
  AnimatePresence,
  AnimatedPressable,
  AnimatedView,
} from '@gluestack-style/animation-resolver';
import { Pressable, View, ScrollView } from 'react-native';

import { styled } from '@gluestack-style/react';

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
const StyledContent = styled(
  AnimatedView,
  {
    'bg': '$background50',
    'rounded': '$lg',
    'overflow': 'hidden',

    ':initial': {
      opacity: 0,
      scale: 0.9,
    },

    ':animate': {
      opacity: 1,
      scale: 1,
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
  { ancestorStyle: ['_content'] }
);
const StyledBody = styled(
  ScrollView,
  { px: '$4', paddingTop: 0, paddingBottom: '$2' },
  {}
);
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
  { descendantStyle: ['_icon', '_text'] }
);
const StyledFooter = styled(
  View,
  {
    p: '$4',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  {}
);
const StyledHeader = styled(
  View,
  {
    px: '$4',
    paddingTop: '$4',
    paddingBottom: '$2',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  {}
);

const UIModal = createModal({
  Root: StyledRoot,
  Backdrop: StyledBackdrop,
  Content: StyledContent,
  Body: StyledBody,
  CloseButton: StyledCloseButton,
  Footer: StyledFooter,
  Header: StyledHeader,
  AnimatePresence: AnimatePresence, // TODO: Add support for this
});

export const Modal = UIModal;
export const ModalBackdrop = UIModal.Backdrop;
export const ModalContent = UIModal.Content;
export const ModalCloseButton = UIModal.CloseButton;
export const ModalHeader = UIModal.Header;
export const ModalBody = UIModal.Body;
export const ModalFooter = UIModal.Footer;
