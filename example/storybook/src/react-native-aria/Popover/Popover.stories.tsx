import React from 'react';

import { PopoverExample } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <PopoverExample />
    </Wrapper>
  );
};

const PopoverMeta: ComponentMeta<any> = {
  title: 'react-native-aria/popover',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default PopoverMeta;
