import React from 'react';

import { ToggleButton } from './ToggleButton';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <ToggleButton>Toggle Button</ToggleButton>
    </Wrapper>
  );
};

const ButtonMeta: ComponentMeta<any> = {
  title: 'react-native-aria/toggle-button',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ButtonMeta;
