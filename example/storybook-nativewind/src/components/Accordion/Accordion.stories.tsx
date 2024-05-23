import type { ComponentMeta } from '@storybook/react-native';
import Accordion from './Accordion';

const AccordionMeta: ComponentMeta<typeof Accordion> = {
  title: 'stories/Accordion',
  component: Accordion,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'unfilled'],
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
};

export default AccordionMeta;

export { Accordion };
