import type { ViewProps } from 'react-native';

export interface ISkeletonProps extends ViewProps {
  /**
   * The fadeIn duration in seconds
   */
  fadeDuration?: number;
  /**
   * If true, it will render its children
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   */
  speed?: number;
  /**
   * Sizes for Skeleton
   */
  size?: string;
}

export interface ISkeletonTextProps extends ViewProps {
  /**
   * The fadeIn duration in seconds
   */
  fadeDuration?: number;
  /**
   * If true, it will render its children
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   */
  speed?: number;
  /**
   * Number of Lines in text
   */
  lines?: number;
}

export type ISkeletonComponentType<SkeletonProps, SkeletonTextProps> =
  React.ForwardRefExoticComponent<SkeletonProps & ISkeletonProps> & {
    Text: React.ForwardRefExoticComponent<
      SkeletonTextProps & ISkeletonTextProps
    >;
  };
