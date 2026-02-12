import type React from 'react';
import type { ImageViewerImageProps } from './ImageViewerImage';
import type { ImageViewerNavigationProps } from './ImageViewerNavigation';
import type { ImageViewerCounterProps } from './ImageViewerCounter';
import type { ImageViewerProps } from './ImageViewer';

export interface IImageViewerComponentType<
  ImageViewerProps,
  TriggerProps,
  ContentProps,
  CloseButtonProps,
  ImageProps,
  NavigationProps,
  CounterProps,
> {
  (
    props: ImageViewerProps & React.RefAttributes<any>
  ): React.ReactElement | null;
  Trigger: React.ForwardRefExoticComponent<
    TriggerProps & React.RefAttributes<any>
  >;
  Content: React.ForwardRefExoticComponent<
    ContentProps & React.RefAttributes<any>
  >;
  CloseButton: React.ForwardRefExoticComponent<
    CloseButtonProps & React.RefAttributes<any>
  >;
  Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<any>>;
  Navigation: React.ForwardRefExoticComponent<
    NavigationProps & React.RefAttributes<any>
  >;
  Counter: React.ForwardRefExoticComponent<
    CounterProps & React.RefAttributes<any>
  >;
}

export type {
  ImageViewerProps,
  ImageViewerImageProps,
  ImageViewerNavigationProps,
  ImageViewerCounterProps,
};
