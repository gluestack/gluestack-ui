import type { ComponentMeta } from '@storybook/react-native';
import { ImageStory as Image } from './Image';
import { ImageSizesStory } from './ImageSizes';

const MyImageMeta: ComponentMeta<typeof Image> = {
  title: 'stories/MEDIA AND ICONS/Image',
  component: Image,
  argTypes: {},
  args: {
    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    fallbackSource: 'https://www.w3schools.com/css/img_lights.jpg',
  },
};

const ImageSizes = ImageSizesStory.bind({});

ImageSizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

export default MyImageMeta;

export { Image };

export { ImageSizes };
// export { WithRef } from './WithRef';
