import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import Accordion from './Accordion';
import DocsContainer from '@storybook/addon-docs';

const AccordionMeta: ComponentMeta<any> = {
  title: 'stories/FORMS/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default AccordionMeta;

export { Accordion };
