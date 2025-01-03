export interface ImageViewerContext {
  onClose: () => void;
  isOpen: boolean;
  scale: number;
  setScale: (scale: number) => void;
}

// export interface ImageViewerProps extends ViewProps {
//   imageUrl: string;
//   visible?: boolean;
//   onRequestClose?: () => void;
//   className?: string;
//   closeButtonClassName?: string;
//   closeButtonIconClassName?: string;
//   imageClassName?: string;
// }

// export type IImageViewerComponentType<StyledImage> = {
//   Modal: React.ComponentType<StyledImage>;
//   GestureHandlerRootView: React.ComponentType<any>;
//   Image: React.ComponentType<ImageProps>;
// };

// export interface IImageViewer {
//   Root: React.FC<ImageViewerProps>;
// }
