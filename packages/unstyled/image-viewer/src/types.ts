export interface ImageViewerContext {
  onClose: () => void;
  isOpen: boolean | undefined;
  scale: number | undefined;
  setScale: (scale: number) => void;
}

export interface InterfaceImageViewerProps {
  /**
   * If true, the modal will open. Useful for controllable state behavior.
   */
  isOpen: boolean | undefined;
  /**
   * Callback invoked when the modal is closed.
   */
  onClose?: any;
}

export interface InterfaceImageViewerContentProps {
  /**
   * The images to display in the ImageViewer.
   */
  images: any[];
  /**
   * The function to render the images.
   */
  renderImages: (item: any) => any;
  /**
   * The function to extract the key for the images.
   */
  keyExtractor: (item: any, index: number) => React.Attributes['key'];
}

export type IImageViewerComponentType<
  ImageViewerProps,
  ImageViewerContentProps,
  ImageViewerCloseButtonProps,
  ImageViewerBackdropProps
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ImageViewerProps> &
    InterfaceImageViewerProps &
    React.RefAttributes<ImageViewerProps>
> & {
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ImageViewerContentProps> &
      InterfaceImageViewerContentProps &
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
