import type { ComponentMeta } from '@storybook/react-native';
import Skeleton from './Skeleton';
import SkeletonTextExample from './SkeletonText';
import SkeletonThumbnails from './SkeletonThumbnails';
import SkeletonCard from './SkeletonCard';

const SkeletonMeta: ComponentMeta<typeof Skeleton> = {
  title: 'stories/Skeleton',
  component: Skeleton,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `This is a Skeleton component.`,
  },
};

export default SkeletonMeta;
export { Skeleton, SkeletonTextExample, SkeletonThumbnails, SkeletonCard };
