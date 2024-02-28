import type { ComponentMeta } from '@storybook/react-native';
import Card from './Card';
// import BlogCard from './BlogCard';
// import ProductCard from './ProductCard';
// import ImageCard from './ImageCard';
// import ProfileCard from './ProfileCard';

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'stories/Card',
  component: Card,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `A Card component serves as a visual container that groups related content and actions.`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['elevated', 'outline', 'ghost', 'filled'],
      defaultValue: 'elevated',
    },
  },
};

export default CardMeta;

export {
  Card,
  // BlogCard,
  // ProductCard,
  // ImageCard,
  // ProfileCard
};
