import { createSkeleton } from '@gluestack-ui/skeleton';

import {
  Root as StyledSkeletonRoot,
  Highlight as StyledSkeletonHighlight,
  Text as StyledSkeletonText,
} from './styled-components';

export const Skeleton = createSkeleton(
  {
    Root: StyledSkeletonRoot,
    Highlight: StyledSkeletonHighlight,
    Text: StyledSkeletonText,
  },
  {}
);
export const SkeletonText = Skeleton.Text;
