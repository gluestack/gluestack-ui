'use client';
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import BottomSheet, { 
  BottomSheetView, 
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetTextInput,
  BottomSheetFlatList,
  BottomSheetSectionList,
  BottomSheetVirtualizedList
} from './src';

// Styles for components that support className
const bottomSheetStyle = tva({
  base: 'w-full h-full',
});

const bottomSheetViewStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetScrollViewStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetTextInputStyle = tva({
  base: 'w-full p-3 border border-outline-200 rounded-lg bg-background-0 text-typography-900',
});

const bottomSheetFlatListStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetSectionListStyle = tva({
  base: 'w-full h-auto',
});

const bottomSheetVirtualizedListStyle = tva({
  base: 'w-full h-auto',
});

// Add handle style (like others)
const bottomSheetHandleStyle = tva({
  base: 'w-full h-6',
});

// Type definitions for components that support className
type IBottomSheetProps = VariantProps<typeof bottomSheetStyle> &
  React.ComponentProps<typeof BottomSheet> & {
    className?: string;
  };

type IBottomSheetViewProps = VariantProps<typeof bottomSheetViewStyle> &
  React.ComponentProps<typeof BottomSheetView> & {
    className?: string;
  };

type IBottomSheetScrollViewProps = VariantProps<typeof bottomSheetScrollViewStyle> &
  React.ComponentProps<typeof BottomSheetScrollView> & {
    className?: string;
  };

type IBottomSheetTextInputProps = VariantProps<typeof bottomSheetTextInputStyle> &
  React.ComponentProps<typeof BottomSheetTextInput> & {
    className?: string;
  };

type IBottomSheetFlatListProps = VariantProps<typeof bottomSheetFlatListStyle> &
  React.ComponentProps<typeof BottomSheetFlatList> & {
    className?: string;
  };

type IBottomSheetSectionListProps = VariantProps<typeof bottomSheetSectionListStyle> &
  React.ComponentProps<typeof BottomSheetSectionList> & {
    className?: string;
  };

type IBottomSheetVirtualizedListProps = VariantProps<typeof bottomSheetVirtualizedListStyle> &
  React.ComponentProps<typeof BottomSheetVirtualizedList> & {
    className?: string;
  };

type IBottomSheetHandleProps = VariantProps<typeof bottomSheetHandleStyle> &
  React.ComponentProps<typeof BottomSheetHandle> & {
    className?: string;
  };

// Apply cssInterop directly to original Gorhom components
cssInterop(BottomSheet, { className: 'style' });
cssInterop(BottomSheetView, { className: 'style' });
cssInterop(BottomSheetScrollView, { className: 'style' });
cssInterop(BottomSheetTextInput, { className: 'style' });
cssInterop(BottomSheetFlatList, { className: 'style' });
cssInterop(BottomSheetSectionList, { className: 'style' });
cssInterop(BottomSheetVirtualizedList, { className: 'style' });
cssInterop(BottomSheetHandle, { className: 'style' });

// Styled components for components that support className
const StyledBottomSheet = React.forwardRef<
  React.ComponentRef<typeof BottomSheet>,
  IBottomSheetProps
>(function StyledBottomSheet({ className, ...props }, ref) {
  return (
    <BottomSheet
      ref={ref}
      {...props}
    />
  );
});

function StyledBottomSheetView({ className, ...props }: IBottomSheetViewProps) {
  return (
    <BottomSheetView
      className={bottomSheetViewStyle({
        class: className,
      })}
      {...props}
    />
  );
}

function StyledBottomSheetScrollView({ className, ...props }: IBottomSheetScrollViewProps) {
  return (
    <BottomSheetScrollView
      className={bottomSheetScrollViewStyle({
        class: className,
      })}
      {...props}
    />
  );
}

function StyledBottomSheetTextInput({ className, ...props }: IBottomSheetTextInputProps) {
  return (
    <BottomSheetTextInput
      className={bottomSheetTextInputStyle({
        class: className,
      })}
      {...props}
    />
  );
}

function StyledBottomSheetFlatList({ className, ...props }: IBottomSheetFlatListProps) {
  return (
    <BottomSheetFlatList
      className={bottomSheetFlatListStyle({
        class: className,
      })}
      {...props}
    />
  );
}

function StyledBottomSheetSectionList({ className, ...props }: IBottomSheetSectionListProps) {
  return (
    <BottomSheetSectionList
      className={bottomSheetSectionListStyle({
        class: className,
      })}
      {...props}
    />
  );
}

function StyledBottomSheetVirtualizedList({ className, ...props }: IBottomSheetVirtualizedListProps) {
  return (
    <BottomSheetVirtualizedList
      className={bottomSheetVirtualizedListStyle({
        class: className,
      })}
      {...props}
    />
  );
}

function StyledBottomSheetHandle({ className, ...props }: IBottomSheetHandleProps) {
  return (
    <BottomSheetHandle
      // @ts-ignore - className handled by nativewind cssInterop
      className={bottomSheetHandleStyle({ class: className })}
      {...props}
    />
  );
}

// Apply cssInterop for className support to styled components as well
cssInterop(StyledBottomSheet, { className: 'style' });
cssInterop(StyledBottomSheetView, { className: 'style' });
cssInterop(StyledBottomSheetScrollView, { className: 'style' });
cssInterop(StyledBottomSheetTextInput, { className: 'style' });
cssInterop(StyledBottomSheetFlatList, { className: 'style' });
cssInterop(StyledBottomSheetSectionList, { className: 'style' });
cssInterop(StyledBottomSheetVirtualizedList, { className: 'style' });
cssInterop(StyledBottomSheetHandle, { className: 'style' });

// Set display names
StyledBottomSheet.displayName = 'BottomSheet';
StyledBottomSheetView.displayName = 'BottomSheetView';
StyledBottomSheetScrollView.displayName = 'BottomSheetScrollView';
StyledBottomSheetTextInput.displayName = 'BottomSheetTextInput';
StyledBottomSheetFlatList.displayName = 'BottomSheetFlatList';
StyledBottomSheetSectionList.displayName = 'BottomSheetSectionList';
StyledBottomSheetVirtualizedList.displayName = 'BottomSheetVirtualizedList';

export {
  StyledBottomSheet as BottomSheet,
  StyledBottomSheetView as BottomSheetView,
  StyledBottomSheetScrollView as BottomSheetScrollView,
  BottomSheetBackdrop,
  StyledBottomSheetHandle as BottomSheetHandle,
  StyledBottomSheetTextInput as BottomSheetTextInput,
  StyledBottomSheetFlatList as BottomSheetFlatList,
  StyledBottomSheetSectionList as BottomSheetSectionList,
  StyledBottomSheetVirtualizedList as BottomSheetVirtualizedList,
}; 