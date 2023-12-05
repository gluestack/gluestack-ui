import React from 'react';

import { OverlayContainerExample } from './index';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

const MenuExample = () => {
  return (
    <Wrapper>
      <OverlayContainerExample />
    </Wrapper>
  );
};

const OverlaysMeta: ComponentMeta<any> = {
  title: 'react-native-aria/overlays',
  component: MenuExample,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default OverlaysMeta;
