import type { ComponentMeta } from '@storybook/react-native';
import Accordion from './Accordion';
import AccordionCustomisedBackground from './AccordionCustomisedBackground';
import AccordionRoundedCorners from './AccordionRoundedCorner';
import AccordionCustomisedComponent from './AccordionCustomisedComponent';
import AccordionNested from './AccordionNested';

const AccordionMeta: ComponentMeta<typeof Accordion> = {
  title: 'components/COMPOSITES/Accordion',
  component: Accordion,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.`,
  },
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

export {
  Accordion,
  AccordionCustomisedBackground,
  AccordionRoundedCorners,
  AccordionCustomisedComponent,
  AccordionNested,
};
