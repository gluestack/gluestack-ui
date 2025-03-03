import type { ComponentMeta } from '@storybook/react-native';
import ImageViewer from './ImageViewer';

const ImageViewerMeta: ComponentMeta<typeof ImageViewer> = {
  title: 'stories/ImageViewer',
  component: ImageViewer,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The ImageViewer component provides a modal view for displaying and interacting with images, supporting features like pinch-to-zoom, double-tap zoom, and swipe up/down to dismiss.`,
  },
  argTypes: {},
  args: {
    images: [
      {
        id: 1,
        url: 'https://img.freepik.com/free-photo/young-boy-learning-how-ride-horse_23-2150460636.jpg',
      },
    ],
  },
};

export default ImageViewerMeta;

export { ImageViewer };
