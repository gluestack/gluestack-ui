import type { ComponentMeta } from '@storybook/react-native';
import Card from './Card';

const CardMeta: ComponentMeta<typeof Card> = {
  title: 'stories/DATA DISPLAY/Card',
  component: Card,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.`,
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

export { Card };
