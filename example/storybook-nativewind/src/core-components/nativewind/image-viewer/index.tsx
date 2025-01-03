'use client';
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
const imageViewerStyle = tva({
  base: 'flex-1 bg-background-dark justify-center items-center ',
});

const ImageStyle = tva({
  base: 'w-[100vw] h-[100vh]',
});

const BackdropStyle = tva({
  base: 'flex-1 bg-background-dark',
});

const CloseButtonStyle = tva({
  base: 'absolute top-4 right-4 z-10 bg-background-dark rounded-full w-8 h-8 justify-center items-center cursor-pointer',
});

const UIImageViewer = createImageViewer({
  Root: Modal,
  Backdrop: Animated.View,
  Content: GestureHandlerRootView,
  Animated: Animated.View,
  Gesture: Gesture,
  GestureDetector: GestureDetector,
  CloseButton: Pressable,
});

// type ImageViewerProps = VariantProps<typeof imageViewerStyle> &
//   React.ComponentProps<typeof UIImageViewer>;

const ImageViewer = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <UIImageViewer
      className={imageViewerStyle({ class: className })}
      {...props}
      ref={ref}
    />
  );
});

const ImageViewerBackdrop = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIImageViewer.Backdrop
        className={BackdropStyle({ class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

const ImageViewerContent = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIImageViewer.Content
        className={imageViewerStyle({ class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

const ImageViewerCloseButton = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIImageViewer.CloseButton
        {...props}
        ref={ref}
        className={CloseButtonStyle({ class: className })}
      />
    );
  }
);

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
