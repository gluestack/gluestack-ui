import React, { useEffect } from 'react';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';

import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Platform,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const UIAccessibleAlertDialog = createAlertDialog({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Body: ScrollView,
  Content: Animated.View,
  CloseButton: Pressable,
  Header: View,
  Footer: View,
  Backdrop: AnimatedPressable,
  AnimatePresence: React.Fragment, //TODO: Add support for this
});

cssInterop(UIAccessibleAlertDialog, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Content, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.CloseButton, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Header, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Footer, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Body, { className: 'style' });
cssInterop(UIAccessibleAlertDialog.Backdrop, { className: 'style' });

const alertDialogStyle = tva({
  base: 'group/modal w-full h-full justify-center items-center web:pointer-events-none',
});

const alertDialogContentStyle = tva({
  base: 'bg-background-50 rounded-lg overflow-hidden ',
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

const alertDialogCloseButtonStyle = tva({
  base: 'group/alert-dialog-close-button z-10 rounded-sm p-2 data-[focus-visible=true]:bg-background-100 web:cursor-pointer outline-0',
});

const alertDialogHeaderStyle = tva({
  base: 'p-4 border border-outline-300 justify-between items-center flex-row',
});

const alertDialogFooterStyle = tva({
  base: 'p-4 flex-row justify-end items-center flex-wrap border-outline-300',
});

const alertDialogBodyStyle = tva({ base: 'px-4 py-2' });

const alertDialogBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-950 web:cursor-default',
});

type IAlertDialogProps = React.ComponentProps<typeof UIAccessibleAlertDialog> &
  VariantProps<typeof alertDialogStyle>;

type IAlertDialogContentProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Content
> &
  VariantProps<typeof alertDialogContentStyle>;

type IAlertDialogCloseButtonProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.CloseButton
> &
  VariantProps<typeof alertDialogCloseButtonStyle>;

type IAlertDialogHeaderProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Header
> &
  VariantProps<typeof alertDialogHeaderStyle>;

type IAlertDialogFooterProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Footer
> &
  VariantProps<typeof alertDialogFooterStyle>;

type IAlertDialogBodyProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Body
> &
  VariantProps<typeof alertDialogBodyStyle>;

type IAlertDialogBackdropProps = React.ComponentProps<
  typeof UIAccessibleAlertDialog.Backdrop
> &
  VariantProps<typeof alertDialogBackdropStyle>;

const AlertDialog = React.forwardRef(
  (
    {
      className,
      //@ts-ignore
      size = 'md',
      ...props
    }: { className?: string } & IAlertDialogProps,
    ref
  ) => {
    return (
      <UIAccessibleAlertDialog
        ref={ref}
        {...props}
        className={alertDialogStyle({ class: className })}
        context={{ size }}
        pointerEvents="box-none"
      />
    );
  }
);

const AlertDialogContent = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: { className?: string } & IAlertDialogContentProps,
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
      <UIAccessibleAlertDialog.Content
        pointerEvents="auto"
        ref={ref}
        {...props}
        className={alertDialogContentStyle({
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
      />
    );
  }
);

const AlertDialogCloseButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: { className?: string } & IAlertDialogCloseButtonProps,
    ref
  ) => {
    return (
      <UIAccessibleAlertDialog.CloseButton
        ref={ref}
        {...props}
        className={alertDialogCloseButtonStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogHeaderProps,
    ref
  ) => {
    return (
      <UIAccessibleAlertDialog.Header
        ref={ref}
        {...props}
        className={alertDialogHeaderStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogFooter = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogFooterProps,
    ref
  ) => {
    return (
      <UIAccessibleAlertDialog.Footer
        ref={ref}
        {...props}
        className={alertDialogFooterStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogBody = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogBodyProps,
    ref
  ) => {
    return (
      <UIAccessibleAlertDialog.Body
        ref={ref}
        {...props}
        className={alertDialogBodyStyle({
          class: className,
        })}
      />
    );
  }
);

const AlertDialogBackdrop = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAlertDialogBackdropProps,
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
      <UIAccessibleAlertDialog.Backdrop
        ref={ref}
        {...props}
        className={alertDialogBackdropStyle({
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

AlertDialog.displayName = 'AlertDialog';
AlertDialogContent.displayName = 'AlertDialogContent';
AlertDialogCloseButton.displayName = 'AlertDialogCloseButton';
AlertDialogHeader.displayName = 'AlertDialogHeader';
AlertDialogFooter.displayName = 'AlertDialogFooter';
AlertDialogBody.displayName = 'AlertDialogBody';
AlertDialogBackdrop.displayName = 'AlertDialogBackdrop';

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
};
