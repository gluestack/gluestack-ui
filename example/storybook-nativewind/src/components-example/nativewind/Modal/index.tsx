import React, { useEffect } from 'react';
import { createModal } from '@gluestack-ui/modal';
import {
  Pressable,
  View,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import {
  tva,
  cssInterop,
  VariantProps,
  useStyleContext,
  withStyleContext,
  withStyleContextAndStates,
} from '@gluestack-ui/nativewind-utils';
import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const UIModal = createModal({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Backdrop: AnimatedPressable,
  Content: Animated.View,
  Body: ScrollView,
  CloseButton: Pressable,
  Footer: View,
  Header: View,
  AnimatePresence: React.Fragment, // TODO: Add support for this
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
});

const modalBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-950 web:cursor-default',
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
  base: 'group/modal-close-button z-10 p-2 rounded-sm data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer',
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
    ref
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
    ref
  ) => {
    const opacity = useSharedValue(0);

    useEffect(() => {
      opacity.value = withTiming(0.5, {
        easing: Easing.linear,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <UIModal.Backdrop
        ref={ref}
        {...props}
        className={modalBackdropStyle({
          class: className,
        })}
        style={[
          StyleSheet.absoluteFill,
          {
            opacity: opacity,
          },
        ]}
      />
    );
  }
);

const ModalContent = React.forwardRef(
  (
    { className, size, ...props }: { className?: string } & IModalContentProps,
    ref
  ) => {
    const { size: parentSize } = useStyleContext();

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
        ref={ref}
        {...props}
        className={modalContentStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
        style={{
          opacity: opacity,
          transform: [{ scale: scale }],
        }}
        pointerEvents="auto"
      />
    );
  }
);

const ModalHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IModalHeaderProps,
    ref
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
  ({ className, ...props }: { className?: string } & IModalBodyProps, ref) => (
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
    ref
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
    ref
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
