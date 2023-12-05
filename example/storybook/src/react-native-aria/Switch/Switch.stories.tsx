import React from 'react';

import { ControlledSwitch } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <ControlledSwitch />
    </Wrapper>
  );
};

const SwitchMeta: ComponentMeta<any> = {
  title: 'react-native-aria/switch',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default SwitchMeta;
