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
  />
));

const ModalBackdrop = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Backdrop
    className={cn('fixed inset-0 z-50 bg-black opacity-50', className)}
    {...props}
    ref={ref}
  />
));

const ModalContent = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Content
    className={cn(
      'gap-4 border border-gray-600/50 bg-black/10 p-6 shadow-lg sm:rounded-lg',
      className
    )}
    {...props}
    ref={ref}
  />
));

const ModalHeader = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Header
    className={cn('flex-row justify-between items-center', className)}
    {...props}
    ref={ref}
  />
));

const ModalBody = UIModal.Body;

const ModalFooter = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal.Footer
    className={cn(
      'flex-row w-full px-4 py-2 justify-end items-center',
      className
    )}
    {...props}
    ref={ref}
  />
));

const ModalCloseButton = React.forwardRef(
  ({ className, ...props }: any, ref) => (
    <UIModal.CloseButton
      className={cn(
        'p-2 rounded-lg hover:bg-gray-500/40 active:bg-slate-400/50 focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none',
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
