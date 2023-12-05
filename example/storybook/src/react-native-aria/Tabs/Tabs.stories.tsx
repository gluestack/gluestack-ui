import React from 'react';

import { Wrapper } from '../Wrapper';
import { TabsExample } from './index';
import { Item } from '@react-stately/collections';
import { Text } from 'react-native';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <TabsExample>
        <Item title="Tab 1" key="val1">
          <Text>Tab 1 Content</Text>
        </Item>
        <Item title="Tab 2" key="val2">
          <Text>Tab 2 Content</Text>
        </Item>
        <Item title="Tab 3" key="val3">
          <Text>Tab 3 Content</Text>
        </Item>
      </TabsExample>
    </Wrapper>
  );
};

const TabsMeta: ComponentMeta<any> = {
  title: 'react-native-aria/tabs',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default TabsMeta;
