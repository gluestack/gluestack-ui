import { default as ImageViewerMain } from './ImageViewer';
import ImageViewerBackdrop from './ImageViewerBackdrop';
import ImageViewerCloseButton from './ImageViewerCloseButton';
import ImageViewerContent from './ImageViewerContent';
import type { IImageViewerComponentType } from './types';

export { ImageViewerContext } from './ImageViewerContext';
export const createImageViewer = <
  ModalProps,
  GestureDetectorProps,
  AnimatedProps,
  GestureProps,
  BackdropProps,
  ContentProps,
  CloseButtonProps
>({
  Root,
  GestureDetector,
  Animated,
  Gesture,
  Backdrop,
  Content,
  CloseButton,
}: {
  Root: React.ComponentType<ModalProps>;
  GestureDetector: React.ComponentType<GestureDetectorProps>;
  Animated: React.ComponentType<AnimatedProps>;
  Gesture: React.ComponentType<GestureProps>;
  Backdrop: React.ComponentType<BackdropProps>;
  Content: React.ComponentType<ContentProps>;
  CloseButton: React.ComponentType<CloseButtonProps>;
}) => {
  const ImageViewer: any = ImageViewerMain(Root);
  ImageViewer.Backdrop = ImageViewerBackdrop(Backdrop);
  ImageViewer.Content = ImageViewerContent(
    Content,
    GestureDetector,
    Animated,
    Gesture
  );
  ImageViewer.CloseButton = ImageViewerCloseButton(CloseButton);

  ImageViewer.displayName = 'ImageViewer';
  ImageViewer.Backdrop.displayName = 'ImageViewer.Backdrop';
  ImageViewer.Content.displayName = 'ImageViewer.Content';
  ImageViewer.CloseButton.displayName = 'ImageViewer.CloseButton';
  return ImageViewer as IImageViewerComponentType<
    ModalProps,
    BackdropProps,
    ContentProps,
    CloseButtonProps
  >;
};
