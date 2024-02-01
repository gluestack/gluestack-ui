import type { ComponentMeta } from '@storybook/react-native';
import Card from './Card';
import BlogCard from './BlogCard';

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'stories/DATA DISPLAY/Card',
  component: Card,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `A Card component is a container that groups related content and actions.`,
  },
  argTypes: {
    // size: {
    //   control: 'select',
    //   options: ['sm', 'md', 'lg'],
    // },
    // variant: {
    //   control: 'select',
    //   options: ['filled', 'unfilled'],
    // },
    // type: {
    //   control: 'select',
    //   options: ['single', 'multiple'],
    // },
    // isDisabled: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
  },
};

export default CardMeta;

export { Card, BlogCard };
