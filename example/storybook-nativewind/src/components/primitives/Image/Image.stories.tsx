import type { ComponentMeta } from '@storybook/react-native';
import Image from './Image';
import ImageSizesStory from './ImageSizes';

const ImageMeta: ComponentMeta<typeof Image> = {
  title: 'components/PRIMITIVES/Image',
  component: Image,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `With the Image component, you can enhance the look and feel of your app or website by incorporating compelling imagery.`,
  },
  argTypes: {},
  args: {
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
};

export default ImageMeta;

export { Image };

export { ImageSizesStory };
