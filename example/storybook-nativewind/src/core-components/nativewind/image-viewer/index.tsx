import React from 'react';
import { createImageViewer } from '@gluestack-ui/image-viewer';
import { Image, Modal, Pressable } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';
import { VariantProps } from '@gluestack-ui/nativewind-utils/types';

const ImageViewerStyle = tva({
  base: 'flex-1 justify-center items-center ',
});

const ImageStyle = tva({
  base: 'w-[100vw] h-[100vh]',
});

const ContentStyle = tva({
  base: '',
});

const BackdropStyle = tva({
  base: 'flex-1 bg-background-dark',
});

const CloseButtonStyle = tva({
  base: 'absolute top-4 right-4 z-10 bg-white rounded-full w-8 h-8 justify-center items-center cursor-pointer',
});

const UIImageViewer = createImageViewer({
  Root: Modal,
  Backdrop: Animated.View,
  Content: GestureHandlerRootView,
  Animated: Animated.View,
  Gesture: Gesture as any,
  GestureDetector: GestureDetector,
  CloseButton: Pressable,
});

type IImageViewerProps = React.ComponentProps<typeof UIImageViewer> &
  VariantProps<typeof ImageViewerStyle> & { className?: string };

type IImageViewerBackdropProps = React.ComponentProps<
  typeof UIImageViewer.Backdrop
> &
  VariantProps<typeof BackdropStyle> & { className?: string };

type IImageViewerContentProps = React.ComponentProps<
  typeof UIImageViewer.Content
> &
  VariantProps<typeof ContentStyle> & { className?: string };

type IImageViewerCloseButtonProps = React.ComponentProps<
  typeof UIImageViewer.CloseButton
> &
  VariantProps<typeof CloseButtonStyle> & { className?: string };

const ImageViewer = React.forwardRef<
  React.ElementRef<typeof UIImageViewer>,
  IImageViewerProps
>(({ className, ...props }, ref) => {
  return (
    <UIImageViewer
      className={ImageViewerStyle({ class: className })}
      {...props}
      ref={ref}
    />
  );
});

const ImageViewerBackdrop = React.forwardRef<
  React.ElementRef<typeof UIImageViewer.Backdrop>,
  IImageViewerBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <UIImageViewer.Backdrop
      className={BackdropStyle({ class: className })}
      {...props}
      ref={ref}
    />
  );
});

const ImageViewerContent = React.forwardRef<
  React.ElementRef<typeof UIImageViewer.Content>,
  IImageViewerContentProps
>(({ className, ...props }, ref) => {
  return (
    <UIImageViewer.Content
      className={ContentStyle({ class: className })}
      {...props}
      ref={ref}
    />
  );
});

const ImageViewerCloseButton = React.forwardRef<
  React.ElementRef<typeof UIImageViewer.CloseButton>,
  IImageViewerCloseButtonProps
>(({ className, ...props }, ref) => {
  return (
    <UIImageViewer.CloseButton
      {...props}
      ref={ref}
      className={CloseButtonStyle({ class: className })}
    />
  );
});

const ImageViewerImage = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <Image
        {...props}
        ref={ref}
        className={ImageStyle({ class: className })}
        resizeMode="contain"
      />
    );
  }
);

ImageViewer.displayName = 'ImageViewer';
ImageViewerBackdrop.displayName = 'ImageViewerBackdrop';
ImageViewerContent.displayName = 'ImageViewerContent';
ImageViewerCloseButton.displayName = 'ImageViewerCloseButton';
ImageViewerImage.displayName = 'ImageViewerImage';

export {
  ImageViewer,
  ImageViewerBackdrop,
  ImageViewerContent,
  ImageViewerCloseButton,
  ImageViewerImage,
};
