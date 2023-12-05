import React from 'react';
import { Button } from './Button';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <Button> Button</Button>
    </Wrapper>
  );
};

const ButtonMeta: ComponentMeta<any> = {
  title: 'react-native-aria/button',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ButtonMeta;
