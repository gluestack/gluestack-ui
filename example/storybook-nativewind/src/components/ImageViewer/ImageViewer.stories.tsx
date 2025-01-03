import type { ComponentMeta } from '@storybook/react-native';
import ImageViewer from './ImageViewer';

const ImageViewerMeta: ComponentMeta<typeof ImageViewer> = {
  title: 'stories/ImageViewer',
  component: ImageViewer,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The ImageViewer component provides a modal view for displaying and interacting with images, supporting features like pinch-to-zoom, double-tap zoom, and swipe-to-dismiss.`,
  },
  argTypes: {},
  args: {
    images: [{ id: 1, url: 'https://picsum.photos/1000/1000' }],
  },
};

export default ImageViewerMeta;

export { ImageViewer };
