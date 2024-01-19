import type { ComponentMeta } from '@storybook/react-native';
import Heading from './Heading';

const HeadingMeta: ComponentMeta<typeof Heading> = {
  title: 'components/PRIMITIVES/Heading',
  component: Heading,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Heading component gives you the ability to create headings for your page with different sizes and symantics from h1 to h6.`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
  },
  args: {
    text: 'This is heading',
    size: '2xl',
  },
};

export default HeadingMeta;

export { Heading };
