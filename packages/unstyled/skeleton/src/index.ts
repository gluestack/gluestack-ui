import { Skeleton as SkeletonMain } from './Skeleton';
import { SkeletonText } from './SkeletonText';
import type { ISkeletonComponentType } from './types';

export function createSkeleton<
  SkeletonProps,
  SkeletonHighlightProps,
  SkeletonTextProps
>(
  {
    Root,
    Highlight,
    Text,
  }: {
    Root: React.ComponentType<SkeletonProps>;
    Highlight: React.ComponentType<SkeletonHighlightProps>;
    Text: React.ComponentType<SkeletonTextProps>;
  },
  {}
) {
  const Skeleton = SkeletonMain(Root, Highlight) as any;
  Skeleton.Text = SkeletonText(Skeleton, Text);

  Skeleton.displayName = 'Skeleton';
  Skeleton.Text.displayName = 'Skeleton.Text';
  Skeleton.defaultProps = {
    // @ts-ignore
    fadeDuration: 0.1,
    speed: 1,
  };
  Skeleton.Text.defaultProps = {
    // @ts-ignore
    fadeDuration: 0.1,
    speed: 1,
    lines: 3,
  };

  return Skeleton as ISkeletonComponentType<SkeletonProps, SkeletonTextProps>;
}
