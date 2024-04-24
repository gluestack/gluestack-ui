'use client';
import React from 'react';
import { createModal } from '@gluestack-ui/modal';
import { Pressable, View, ScrollView, Platform } from 'react-native';
import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
} from '@legendapp/motion';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const AnimatedPressable = createMotionAnimatedComponent(Pressable);

const SCOPE = 'MODAL';

const UIModal = createModal({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(View, SCOPE),
  Backdrop: AnimatedPressable,
  Content: Motion.View,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: AnimatePresence,
});
cssInterop(UIModal, { className: 'style' });
cssInterop(UIModal.Backdrop, { className: 'style' });
cssInterop(UIModal.Content, { className: 'style' });
cssInterop(UIModal.CloseButton, { className: 'style' });
cssInterop(UIModal.Header, { className: 'style' });
cssInterop(UIModal.Body, { className: 'style' });
cssInterop(UIModal.Footer, { className: 'style' });

const modalStyle = tva({
  base: 'group/modal w-full h-full justify-center items-center web:pointer-events-none',
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      full: '',
    },
  },
});

const modalBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default',
});

const modalContentStyle = tva({
  base: 'bg-background-50 rounded-lg overflow-hidden',
  parentVariants: {
    size: {
      xs: 'w-[60%] max-w-[360px]',
      sm: 'w-[70%] max-w-[420px]',
      md: 'w-[80%] max-w-[510px]',
      lg: 'w-[90%] max-w-[640px]',
      full: 'w-full',
    },
  },
});

const modalBodyStyle = tva({
  base: 'px-4 pb-2 pt-0',
});

const modalCloseButtonStyle = tva({
  base: 'group/modal-close-button z-10 p-2 rounded data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer',
});

const modalHeaderStyle = tva({
  base: 'px-4 pt-4 pb-2 justify-between items-center flex-row',
});

const modalFooterStyle = tva({
  base: 'p-4 flex-row justify-end items-center flex-wrap',
});

type IModalProps = React.ComponentProps<typeof UIModal> &
  VariantProps<typeof modalStyle>;

type IModalBackdropProps = React.ComponentProps<typeof UIModal.Backdrop> &
  VariantProps<typeof modalBackdropStyle>;

type IModalContentProps = React.ComponentProps<typeof UIModal.Content> &
  VariantProps<typeof modalContentStyle>;

type IModalHeaderProps = React.ComponentProps<typeof UIModal.Header> &
  VariantProps<typeof modalHeaderStyle>;

type IModalBodyProps = React.ComponentProps<typeof UIModal.Body> &
  VariantProps<typeof modalBodyStyle>;

type IModalFooterProps = React.ComponentProps<typeof UIModal.Footer> &
  VariantProps<typeof modalFooterStyle>;

type IModalCloseButtonProps = React.ComponentProps<typeof UIModal.CloseButton> &
  VariantProps<typeof modalCloseButtonStyle>;

const Modal = React.forwardRef(
  (
    //@ts-ignore
    { className, size = 'md', ...props }: { className?: string } & IModalProps,
    ref?: any
  ) => (
    <UIModal
      ref={ref}
      {...props}
      pointerEvents="box-none"
      className={modalStyle({ size, class: className })}
      context={{ size }}
    />
  )
);

const ModalBackdrop = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IModalBackdropProps,
    ref?: any
  ) => {
    return (
      <UIModal.Backdrop
        ref={ref}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.5,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: 'spring',
          damping: 18,
          stiffness: 250,
          opacity: {
            type: 'timing',
            duration: 250,
          },
        }}
        {...props}
        className={modalBackdropStyle({
          class: className,
        })}
      />
    );
  }
);

const ModalContent = React.forwardRef(
  (
    { className, size, ...props }: { className?: string } & IModalContentProps,
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIModal.Content
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          type: 'spring',
          damping: 18,
          stiffness: 250,
          opacity: {
            type: 'timing',
            duration: 250,
          },
        }}
        {...props}
        className={modalContentStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
        pointerEvents="auto"
      />
    );
  }
);

const ModalHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IModalHeaderProps,
    ref?: any
  ) => (
    <UIModal.Header
      ref={ref}
      {...props}
      className={modalHeaderStyle({
        class: className,
      })}
    />
  )
);

const ModalBody = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IModalBodyProps,
    ref?: any
  ) => (
    <UIModal.Body
      ref={ref}
      {...props}
      className={modalBodyStyle({
        class: className,
      })}
    />
  )
);

const ModalFooter = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IModalFooterProps,
    ref?: any
  ) => (
    <UIModal.Footer
      ref={ref}
      {...props}
      className={modalFooterStyle({
        class: className,
      })}
    />
  )
);

const ModalCloseButton = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IModalCloseButtonProps,
    ref?: any
  ) => (
    <UIModal.CloseButton
      ref={ref}
      {...props}
      className={modalCloseButtonStyle({
        class: className,
      })}
    />
  )
);

// Assign display names
Modal.displayName = 'Modal';
ModalBackdrop.displayName = 'ModalBackdrop';
ModalContent.displayName = 'ModalContent';
ModalHeader.displayName = 'ModalHeader';
ModalBody.displayName = 'ModalBody';
ModalFooter.displayName = 'ModalFooter';
ModalCloseButton.displayName = 'ModalCloseButton';

export {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
};
