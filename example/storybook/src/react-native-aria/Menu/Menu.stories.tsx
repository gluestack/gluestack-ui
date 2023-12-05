import React from 'react';

import { MenuButton } from './index';
import { Item, Section } from '@react-stately/collections';
import { View } from 'react-native';
import { Wrapper } from '../Wrapper';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

const MenuExample = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <MenuButton
        label="Actions"
        onAction={console.error}
        selectionMode="multiple"
        closeOnSelect={false}
        onSelectionChange={console.error}
      >
        <Section title="Section 1">
          <Item key="copy">Copy</Item>
          <Item key="cut">Cut</Item>
          <Item key="paste">Paste</Item>
        </Section>
        <Section title="Section 2">
          <Item key="copy 2">Copy</Item>
          <Item key="cut 2">Cut</Item>
          <Item key="paste 2">Paste</Item>
        </Section>
      </MenuButton>
    </View>
  );
};

const Example = () => {
  return (
    <Wrapper>
      <MenuExample />
    </Wrapper>
  );
};

const MenuMeta: ComponentMeta<any> = {
  title: 'react-native-aria/menu',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default MenuMeta;
