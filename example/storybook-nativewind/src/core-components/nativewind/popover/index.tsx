import React, { useEffect } from 'react';
import { createPopover } from '@gluestack-ui/popover';
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
import {
  View,
  Pressable,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const UIPopover = createPopover({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Arrow: Animated.View,
  Backdrop: AnimatedPressable,
  Body: ScrollView,
  CloseButton: Pressable,
  Content: Animated.View,
  Footer: View,
  Header: View,
  AnimatedPresence: React.Fragment, // TODO: Add support for this
});
cssInterop(UIPopover, { className: 'style' });
cssInterop(UIPopover.Arrow, { className: 'style' });
cssInterop(UIPopover.Content, { className: 'style' });
cssInterop(UIPopover.Header, { className: 'style' });
cssInterop(UIPopover.Footer, { className: 'style' });
cssInterop(UIPopover.Body, { className: 'style' });
cssInterop(UIPopover.Backdrop, { className: 'style' });
cssInterop(UIPopover.CloseButton, { className: 'style' });

const popoverStyle = tva({
  base: 'group/popover w-full h-full justify-center items-center web:pointer-events-none',
});
const popoverArrowStyle = tva({
  base: '',
});

const popoverBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-950 web:cursor-default',
});

const popoverBodyStyle = tva({
  base: 'p-4 pt-2',
});

const popoverCloseButtonStyle = tva({
  base: 'group/popover-close-button z-10 p-2 rounded-sm data-[focus-visible=true]:web:bg-background-100 web:outline-0 cursor-pointer',
});

const popoverContentStyle = tva({
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

const popoverFooterStyle = tva({
  base: 'p-4 flex-row justify-end items-center flex-wrap border-t border-outline-300',
});

const popoverHeaderStyle = tva({
  base: 'p-4 pb-2 justify-between items-center flex-row',
});

type IPopoverProps = React.ComponentProps<typeof UIPopover> &
  VariantProps<typeof popoverStyle>;

type IPopoverArrowProps = React.ComponentProps<typeof UIPopover.Arrow> &
  VariantProps<typeof popoverArrowStyle>;

type IPopoverContentProps = React.ComponentProps<typeof popoverContentStyle> &
  VariantProps<typeof popoverContentStyle>;

type IPopoverHeaderProps = React.ComponentProps<typeof popoverHeaderStyle> &
  VariantProps<typeof popoverHeaderStyle>;

type IPopoverFooterProps = React.ComponentProps<typeof popoverFooterStyle> &
  VariantProps<typeof popoverFooterStyle>;

type IPopoverBodyProps = React.ComponentProps<typeof UIPopover.Body> &
  VariantProps<typeof popoverBodyStyle>;

type IPopoverBackdropProps = React.ComponentProps<typeof UIPopover.Backdrop> &
  VariantProps<typeof popoverBackdropStyle>;

type IPopoverCloseButtonProps = React.ComponentProps<
  typeof UIPopover.CloseButton
> &
  VariantProps<typeof popoverCloseButtonStyle>;

const Popover = React.forwardRef(
  (
    //@ts-ignore
    {
      className,
      size = 'md',
      ...props
    }: { className?: string } & IPopoverProps,
    ref
  ) => (
    <UIPopover
      ref={ref}
      {...props}
      className={popoverStyle({ size, class: className })}
      context={{ size }}
      pointerEvents="box-none"
    />
  )
);

const PopoverArrow = React.forwardRef(
  (
    //@ts-ignore
    { className, ...props }: { className?: string } & IPopoverArrowProps,
    ref
  ) => (
    <UIPopover.Arrow
      ref={ref}
      {...props}
      className={popoverArrowStyle({ class: className })}
    />
  )
);

const PopoverBackdrop = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverBackdropProps,
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
      <UIPopover.Backdrop
        ref={ref}
        {...props}
        className={popoverBackdropStyle({
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

const PopoverBody = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverBodyProps,
    ref
  ) => (
    <UIPopover.Body
      ref={ref}
      {...props}
      className={popoverBodyStyle({
        class: className,
      })}
    />
  )
);

const PopoverCloseButton = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverCloseButtonProps,
    ref
  ) => (
    <UIPopover.CloseButton
      ref={ref}
      {...props}
      className={popoverCloseButtonStyle({
        class: className,
      })}
    />
  )
);

const PopoverContent = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: { className?: string } & IPopoverContentProps,
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
      <UIPopover.Content
        ref={ref}
        {...props}
        className={popoverContentStyle({
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

const PopoverFooter = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverFooterProps,
    ref
  ) => (
    <UIPopover.Footer
      ref={ref}
      {...props}
      className={popoverFooterStyle({
        class: className,
      })}
    />
  )
);

const PopoverHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IPopoverHeaderProps,
    ref
  ) => (
    <UIPopover.Header
      ref={ref}
      {...props}
      className={popoverHeaderStyle({
        class: className,
      })}
    />
  )
);

Popover.displayName = 'Popover';
PopoverArrow.displayName = 'PopoverArrow';
PopoverBackdrop.displayName = 'PopoverBackdrop';
PopoverContent.displayName = 'PopoverContent';
PopoverHeader.displayName = 'PopoverHeader';
PopoverFooter.displayName = 'PopoverFooter';
PopoverBody.displayName = 'PopoverBody';
PopoverCloseButton.displayName = 'PopoverCloseButton';

export {
  Popover,
  PopoverBackdrop,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
};
