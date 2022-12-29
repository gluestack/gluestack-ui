import type { ImageProps, ImageSourcePropType } from 'react-native';

export interface InterfaceImageProps
  extends Omit<
    ImageProps,
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'height'
    | 'width'
    | 'source'
  > {
  /**
   * specify a source for image.
   */
  source?: ImageSourcePropType;
  /**
   * The alt text that describes the image. This will be added as accessibilityLabel in android/iOS and alt on web.
   */
  alt?: string;
  /**
   * In the event of an error loading the src, specify a fallback source.
   */
  fallbackSource?: ImageSourcePropType;
  /**
   * Opt out of the fallbackSource logic and show alternative text.
   */
  ignoreFallback?: boolean;
  /**
   * In the event of an error loading the src, specify a fallback JSX Element.
   */
  fallbackElement?: JSX.Element | JSX.Element[];
  /**
   * specify a source for image.
   */
  src?: string;
}

export type IImageProps = InterfaceImageProps;
