import React from 'react';
import { Platform } from 'react-native';

import { TooltipExample } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  if (Platform.OS === 'web') {
    return (
      <Wrapper>
        <TooltipExample />
      </Wrapper>
    );
  }

  return null;
};

const TooltipMeta: ComponentMeta<any> = {
  title: 'react-native-aria/tooltip',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default TooltipMeta;
