import type React from 'react';
import { ImageViewer as ImageViewerMain } from './ImageViewer';
import { ImageViewerContent } from './ImageViewerContent';
import { ImageViewerTrigger } from './ImageViewerTrigger';
import { ImageViewerCloseButton } from './ImageViewerCloseButton';
import { ImageViewerImage } from './ImageViewerImage';
import { ImageViewerNavigation } from './ImageViewerNavigation';
import { ImageViewerCounter } from './ImageViewerCounter';
import type { IImageViewerComponentType } from './types';

export { ImageViewerContext } from './Context';

export function createImageViewer<
  ImageViewerProps,
  TriggerProps,
  ContentProps,
  CloseButtonProps,
  ImageProps,
  NavigationProps,
  CounterProps,
>({
  Root,
  Trigger,
  Content,
  CloseButton,
  Image,
  Navigation,
  Counter,
}: {
  Root: React.ComponentType<ImageViewerProps>;
  Trigger: React.ComponentType<TriggerProps>;
  Content: React.ComponentType<ContentProps>;
  CloseButton: React.ComponentType<CloseButtonProps>;
  Image: React.ComponentType<ImageProps>;
  Navigation: React.ComponentType<NavigationProps>;
  Counter: React.ComponentType<CounterProps>;
}) {
  const ImageViewer = ImageViewerMain(Root) as any;
  ImageViewer.Trigger = ImageViewerTrigger(Trigger);
  ImageViewer.Content = ImageViewerContent(Content);
  ImageViewer.CloseButton = ImageViewerCloseButton(CloseButton);
  ImageViewer.Image = ImageViewerImage(Image);
  ImageViewer.Navigation = ImageViewerNavigation(Navigation);
  ImageViewer.Counter = ImageViewerCounter(Counter);

  ImageViewer.displayName = 'ImageViewer';
  ImageViewer.Trigger.displayName = 'ImageViewer.Trigger';
  ImageViewer.Content.displayName = 'ImageViewer.Content';
  ImageViewer.CloseButton.displayName = 'ImageViewer.CloseButton';
  ImageViewer.Image.displayName = 'ImageViewer.Image';
  ImageViewer.Navigation.displayName = 'ImageViewer.Navigation';
  ImageViewer.Counter.displayName = 'ImageViewer.Counter';

  return ImageViewer as IImageViewerComponentType<
    ImageViewerProps,
    TriggerProps,
    ContentProps,
    CloseButtonProps,
    ImageProps,
    NavigationProps,
    CounterProps
  >;
}
