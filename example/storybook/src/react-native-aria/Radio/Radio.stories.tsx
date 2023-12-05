import React from 'react';

import { RadioGroup, Radio } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

const RadioExample = () => {
  return (
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
  );
};

export const Example = () => {
  return (
    <Wrapper>
      <RadioExample />
    </Wrapper>
  );
};

const RadioMeta: ComponentMeta<any> = {
  title: 'react-native-aria/radio',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default RadioMeta;
