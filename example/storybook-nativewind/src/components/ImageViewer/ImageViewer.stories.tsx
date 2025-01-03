import type { ComponentMeta } from '@storybook/react-native';
import ImageViewer from './ImageViewer';

const ImageViewerMeta: ComponentMeta<typeof ImageViewer> = {
  title: 'stories/ImageViewer',
  component: ImageViewer,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `With the Image component, you can enhance the look and feel of your app or website by incorporating compelling imagery.`, //change description
  },
  argTypes: {},
  args: {},
};

export default ImageViewerMeta;

export { ImageViewer };
