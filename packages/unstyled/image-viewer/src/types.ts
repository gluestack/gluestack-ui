export interface ImageViewerContext {
  onClose: () => void;
  isOpen: boolean | undefined;
  scale: number | undefined;
  setScale: (scale: number) => void;
}

export interface ImageViewerProps {
  /**
   * If true, the modal will open. Useful for controllable state behavior.
   */
  isOpen: boolean | undefined;
  /**
   * Callback invoked when the modal is closed.
   */
  onClose?: any;
  /**
   * If true, the modal will be opened by default.
   */
}

export interface ImageViewerContentProps {
  images: any;
  renderImages: (item: any) => any;
  keyExtractor: (item: any, index: number) => string;
}

export type IImageViewerComponentType<
  ImageViewerProps,
  ImageViewerContentProps,
  ImageViewerCloseButtonProps,
  ImageViewerBackdropProps
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ImageViewerProps> &
    React.RefAttributes<ImageViewerProps>
> & {
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ImageViewerContentProps> &
      React.RefAttributes<ImageViewerContentProps>
  >;
  CloseButton: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ImageViewerCloseButtonProps> &
      React.RefAttributes<ImageViewerCloseButtonProps>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ImageViewerBackdropProps> &
      React.RefAttributes<ImageViewerBackdropProps>
  >;
};
