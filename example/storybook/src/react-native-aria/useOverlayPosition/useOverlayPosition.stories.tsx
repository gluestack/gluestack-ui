import React from 'react';

import { TriggerWrapper } from './useOverlayPosition';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

const Example = () => {
  return (
    <Wrapper>
      <TriggerWrapper />
    </Wrapper>
  );
};

const useOverlayPositionMeta: ComponentMeta<any> = {
  title: 'react-native-aria/useOverlayPosition',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default useOverlayPositionMeta;
