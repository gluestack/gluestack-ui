import type { ComponentMeta } from '@storybook/react-native';
import Icon from './Icon';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'stories/Icon',
  component: Icon,
  metaInfo: {
    clusteringOrder: [['as', 'displayName'], 'size'],
    componentDescription:
      'Icons are often used to enhance the usability and accessibility of digital products by providing users with clear and intuitive visual cues. It serves as an intuitive and easily recognizable way to communicate with users.',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm', 'xs', '2xs'],
    },
  },
  args: {
    size: 'md',
  },
};

export default IconMeta;

export { Icon };
