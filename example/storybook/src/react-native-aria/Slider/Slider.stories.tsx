import React from 'react';

import { Slider } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

const SliderExample = () => {
  return (
    <Slider label="Opacity" formatOptions={{ style: 'percent' }} step={1} />
  );
};

export const Example = () => {
  return (
    <Wrapper>
      <SliderExample />
    </Wrapper>
  );
};

const SliderMeta: ComponentMeta<any> = {
  title: 'react-native-aria/slider',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default SliderMeta;
