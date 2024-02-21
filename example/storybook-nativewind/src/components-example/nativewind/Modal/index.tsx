import React, { useEffect } from 'react';
import { createModal } from '@gluestack-ui/modal';
import { Pressable, View, StyleSheet } from 'react-native';
import { cn } from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';
import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const UIModal = createModal({
  Root: View,
  Backdrop: AnimatedPressable,
  Content: Animated.View,
  Body: View,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: React.Fragment, // TODO: Add support for this
});
cssInterop(UIModal, { className: 'style' });
cssInterop(UIModal.Backdrop, { className: 'style' });
cssInterop(UIModal.Content, { className: 'style' });
cssInterop(UIModal.Body, { className: 'style' });
cssInterop(UIModal.CloseButton, { className: 'style' });
cssInterop(UIModal.Footer, { className: 'style' });
cssInterop(UIModal.Header, { className: 'style' });

const Modal = React.forwardRef(({ className, ...props }: any, ref) => (
  <UIModal
    className={cn(
      'flex-1 w-full h-full justify-center items-center',
      className
    )}
    {...props}
    ref={ref}
    pointerEvents="box-none"
  />
));

const ModalBackdrop = React.forwardRef(({ className, ...props }: any, ref) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(0.5, {
      easing: Easing.linear,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UIModal.Backdrop
      className={cn(
        'h-full w-full bg-background-950 cursor-default opacity-50 pointer-events-auto',
        className
      )}
      style={[
        StyleSheet.absoluteFill,
        {
          opacity: opacity,
        },
      ]}
      {...props}
      ref={ref}
    />
  );
});

const ModalContent = React.forwardRef(({ className, ...props }: any, ref) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);
  useEffect(() => {
    opacity.value = withTiming(1, {
      easing: Easing.linear,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    scale.value = withSpring(1, {
      damping: 18,
      stiffness: 250,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UIModal.Content
      pointerEvents="auto"
      className={cn(
        'w-70% max-w-[420px] bg-background-50 rounded-md',
        className
      )}
      {...props}
      style={{
        opacity: opacity,
        transform: [{ scale: scale }],
      }}
      ref={ref}
    />
  );
});

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
        'group/modal-close-button p-2 rounded-lg  focus-visible:bg-background-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
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
