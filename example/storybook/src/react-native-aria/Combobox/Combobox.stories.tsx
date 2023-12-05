import React from 'react';

import { Wrapper } from '../Wrapper';
import { ComboBox } from './index';
import { Item } from '@react-stately/collections';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

export const Example = () => {
  return (
    <Wrapper>
      <ComboBox label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </ComboBox>
    </Wrapper>
  );
};

const ComboboxMeta: ComponentMeta<any> = {
  title: 'react-native-aria/combobox',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ComboboxMeta;
