import React from 'react';
import { createModal } from '@gluestack-ui/modal';
import { Pressable, View } from 'react-native';
import { cn } from '@gluestack-ui/nativewind-utils';

const UIModal = createModal({
  Root: View,
  Backdrop: Pressable,
  Content: View,
  Body: View,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: View, // TODO: Add support for this
});

const Modal = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal
    className={cn('w-full h-full justify-center items-center', className)}
    {...props}
    ref={ref}
    pointerEvents="box-none"
  />
));

const ModalBackdrop = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Backdrop
    className={cn(
      'absolute left-0 right-0 bottom-0 top-0 bg-background-950 cursor-default opacity-50',
      className
    )}
    {...props}
    ref={ref}
  />
));

const ModalContent = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Content
    className={cn('w-70% max-w-[420px]', className)}
    {...props}
    ref={ref}
  />
));

const ModalHeader = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Header
    className={cn(
      'px-4 pt-4 pb-2 justify-between item-center flex-row',
      className
    )}
    {...props}
    ref={ref}
  />
));

const ModalBody = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Body className={cn('px-4 pb-2', className)} {...props} ref={ref} />
));

const ModalFooter = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Footer
    className={cn('p-4 flex-row flex-wrap justify-end items-center', className)}
    {...props}
    ref={ref}
  />
));

const ModalCloseButton = React.forwardRef(
  ({ className, ...props }: any, ref) => (
    <UIModal.CloseButton
      className={cn(
        'p-2 rounded-lg hover:bg-background-700 active:bg-background-900 focus-visible:bg-background-700 ',
        className
      )}
      {...props}
      ref={ref}
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
