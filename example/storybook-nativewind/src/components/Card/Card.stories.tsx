import type { ComponentMeta } from '@storybook/react-native';
import Card from './Card';

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'stories/Card',
  component: Card,
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

export { Card };
