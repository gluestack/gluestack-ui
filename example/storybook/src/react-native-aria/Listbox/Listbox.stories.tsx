import React from 'react';

import { Wrapper } from '../Wrapper';
import { ListBox } from './index';
import { Item } from '@react-stately/collections';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <ListBox
        label="Choose an option"
        selectionMode="multiple"
        defaultSelectedKeys={['one']}
        shouldFocusWrap
      >
        <Item key="one">One</Item>
        <Item key="two">Two</Item>
        <Item key="three">Three</Item>
      </ListBox>
    </Wrapper>
  );
};

const ListboxMeta: ComponentMeta<any> = {
  title: 'react-native-aria/listbox',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ListboxMeta;
