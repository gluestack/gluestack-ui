export interface ImageViewerContext {
  /**
   * Callback invoked when the ImageViewer is closed.
   */
  onClose: () => void;
  /**
   * If true, the ImageViewer will open. Useful for controllable state behavior.
   */
  isOpen: boolean | undefined;
  /**
   * The current scale of the Image.
   */
  scale: number | undefined;
  /**
   * Callback function to set the scale of the Image to be used in backdrop for adjusting the opacity.
   */
  setScale: (scale: number) => void;
}

export interface InterfaceImageViewerProps {
  /**
   * If true, the ImageViewer will open. Useful for controllable state behavior.
   */
  isOpen: boolean;
  /**
   * Callback invoked when the ImageViewer is closed.
   */
  onClose?: any;
}

export interface InterfaceImageViewerContentProps {
  /**
   * The images to display in the ImageViewer.
   */
  images: Array<any>;
  /**
   * Callback React.ReactNode function to render the images.
   */
  renderImages: ({
    item,
    index,
    onLoad,
  }: {
    item: any;
    index: number;
    onLoad: (event: any) => void;
  }) => React.ReactNode;
  /**
   * Callback function to extract the key for the images.
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
