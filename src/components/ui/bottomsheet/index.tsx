'use client';
import React from 'react';
import { createBottomSheet } from '@gluestack-ui/core/bottomsheet/creator';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  PressableProps,
  Platform,
} from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

const ItemWrapper = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  PressableProps
>(function ItemWrapper({ ...props }, ref) {
  return <Pressable {...props} ref={ref} />;
});

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const UIBottomSheet = createBottomSheet({
  Root: View,
  Content: AnimatedView,
  Item: ItemWrapper,
  ItemText: Text,
  DragIndicator: View,
  IndicatorWrapper: View,
  Backdrop: AnimatedPressable,
  ScrollView: ScrollView,
  FlatList: FlatList,
  SectionList: SectionList,
  TextInput: TextInput,
});

cssInterop(UIBottomSheet, { className: 'style' });
cssInterop(AnimatedView, { className: 'style' });
cssInterop(ItemWrapper, { className: 'style' });
cssInterop(UIBottomSheet.ItemText, { className: 'style' });
cssInterop(UIBottomSheet.DragIndicator, { className: 'style' });
cssInterop(UIBottomSheet.DragIndicatorWrapper, { className: 'style' });
cssInterop(AnimatedPressable, { className: 'style' });
cssInterop(UIBottomSheet.ScrollView, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
});
cssInterop(UIBottomSheet.FlatList, {
  className: 'style',
  ListFooterComponentClassName: 'ListFooterComponentStyle',
  ListHeaderComponentClassName: 'ListHeaderComponentStyle',
  columnWrapperClassName: 'columnWrapperStyle',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
});
cssInterop(UIBottomSheet.SectionList, { className: 'style' });
cssInterop(UIBottomSheet.TextInput, { className: 'style' });

const bottomSheetStyle = tva({
  base: 'w-full h-full web:pointer-events-none'
});

const bottomSheetContentStyle = tva({
  base: 'items-center rounded-t-3xl p-6 bg-background web:pointer-events-auto web:select-none border-t border-border dark:border-border/10 max-h-[90vh] pb-safe',
});

const bottomSheetItemStyle = tva({
  base: 'w-full flex-row items-center p-3 rounded-sm data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed data-[hover=true]:bg-accent data-[active=true]:bg-accent data-[focus=true]:bg-accent web:data-[focus-visible=true]:bg-accent',
});

const bottomSheetItemTextStyle = tva({
  base: 'text-foreground font-normal font-body text-base',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
  },
});

const bottomSheetDragIndicatorStyle = tva({
  base: 'w-[100px] h-2 bg-muted rounded-full',
});

const bottomSheetDragIndicatorWrapperStyle = tva({
  base: 'w-full py-2 items-center',
});

const bottomSheetBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-black/50 web:cursor-default web:pointer-events-auto',
});

const bottomSheetScrollViewStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetFlatListStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetSectionListStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetTextInputStyle = tva({
  base: 'text-foreground p-2 border-border border rounded font-body',
});

type IBottomSheetProps = VariantProps<typeof bottomSheetStyle> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet>;

type IBottomSheetContentProps = VariantProps<typeof bottomSheetContentStyle> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.Content> & {
    className?: string;
  };

type IBottomSheetItemProps = VariantProps<typeof bottomSheetItemStyle> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.Item>;

type IBottomSheetItemTextProps = VariantProps<typeof bottomSheetItemTextStyle> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.ItemText>;

type IBottomSheetDragIndicatorProps = VariantProps<
  typeof bottomSheetDragIndicatorStyle
> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.DragIndicator>;

type IBottomSheetDragIndicatorWrapperProps = VariantProps<
  typeof bottomSheetDragIndicatorWrapperStyle
> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.DragIndicatorWrapper>;

type IBottomSheetBackdropProps = VariantProps<typeof bottomSheetBackdropStyle> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.Backdrop> & {
    className?: string;
  };

type IBottomSheetScrollViewProps = VariantProps<
  typeof bottomSheetScrollViewStyle
> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.ScrollView>;

type IBottomSheetFlatListProps = VariantProps<typeof bottomSheetFlatListStyle> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.FlatList>;

type IBottomSheetSectionListProps = VariantProps<
  typeof bottomSheetSectionListStyle
> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.SectionList>;

type IBottomSheetTextInputProps = VariantProps<
  typeof bottomSheetTextInputStyle
> &
  React.ComponentPropsWithoutRef<typeof UIBottomSheet.TextInput>;

const BottomSheet = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet>,
  IBottomSheetProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet
      ref={ref}
      className={bottomSheetStyle({
        class: className,
      })}
      pointerEvents="box-none"
      {...props}
    />
  );
});
BottomSheet.displayName = 'BottomSheet';

const BottomSheetContent = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.Content>,
  IBottomSheetContentProps
>(({ className, ...props }, ref) => {
  // On web, skip exiting animation to prevent conflict with drag-to-close animation
  // The drag gesture handles the exit animation, and for other close methods,
  // instant unmount is acceptable on web
  const exitingAnimation = Platform.OS === 'web' ? undefined : SlideOutDown.duration(200);

  return (
    <UIBottomSheet.Content
      entering={SlideInDown.duration(300).springify()}
      exiting={exitingAnimation}
      pointerEvents="auto"
      ref={ref}
      className={bottomSheetContentStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetContent.displayName = 'BottomSheet.Content';

const BottomSheetItem = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.Item>,
  IBottomSheetItemProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.Item
      ref={ref}
      className={bottomSheetItemStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetItem.displayName = 'BottomSheet.Item';

const BottomSheetItemText = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.ItemText>,
  IBottomSheetItemTextProps
>(({ className, isTruncated, bold, underline, strikeThrough, ...props }, ref) => {
  return (
    <UIBottomSheet.ItemText
      ref={ref}
      className={bottomSheetItemTextStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetItemText.displayName = 'BottomSheet.ItemText';

const BottomSheetDragIndicator = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.DragIndicator>,
  IBottomSheetDragIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.DragIndicator
    hitSlop={20}
      ref={ref}
      className={bottomSheetDragIndicatorStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetDragIndicator.displayName = 'BottomSheet.DragIndicator';

const BottomSheetDragIndicatorWrapper = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.DragIndicatorWrapper>,
  IBottomSheetDragIndicatorWrapperProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.DragIndicatorWrapper
    hitSlop={20}
      ref={ref}
      className={bottomSheetDragIndicatorWrapperStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetDragIndicatorWrapper.displayName = 'BottomSheet.DragIndicatorWrapper';

const BottomSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.Backdrop>,
  IBottomSheetBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.Backdrop
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
      ref={ref}
      className={bottomSheetBackdropStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetBackdrop.displayName = 'BottomSheet.Backdrop';

const BottomSheetScrollView = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.ScrollView>,
  IBottomSheetScrollViewProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.ScrollView
      ref={ref}
      className={bottomSheetScrollViewStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetScrollView.displayName = 'BottomSheet.ScrollView';

const BottomSheetFlatList = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.FlatList>,
  IBottomSheetFlatListProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.FlatList
      ref={ref}
      className={bottomSheetFlatListStyle({
        class: className,
      })}
      {...props}
    />
  );
}) as <ItemT = any>(
  props: IBottomSheetFlatListProps &
    React.RefAttributes<React.ElementRef<typeof UIBottomSheet.FlatList>>
) => React.ReactElement;

const BottomSheetSectionList = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.SectionList>,
  IBottomSheetSectionListProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.SectionList
      ref={ref}
      className={bottomSheetSectionListStyle({
        class: className,
      })}
      {...props}
    />
  );
}) as <ItemT = any, SectionT = any>(
  props: IBottomSheetSectionListProps &
    React.RefAttributes<React.ElementRef<typeof UIBottomSheet.SectionList>>
) => React.ReactElement;

const BottomSheetTextInput = React.forwardRef<
  React.ElementRef<typeof UIBottomSheet.TextInput>,
  IBottomSheetTextInputProps
>(({ className, ...props }, ref) => {
  return (
    <UIBottomSheet.TextInput
      ref={ref}
      className={bottomSheetTextInputStyle({
        class: className,
      })}
      {...props}
    />
  );
});
BottomSheetTextInput.displayName = 'BottomSheet.TextInput';

export {
  BottomSheet,
  BottomSheetContent,
  BottomSheetItem,
  BottomSheetItemText,
  BottomSheetDragIndicator,
  BottomSheetDragIndicatorWrapper,
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetFlatList,
  BottomSheetSectionList,
  BottomSheetTextInput,
};
