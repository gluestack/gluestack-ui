import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Actionsheet } from './Actionsheet';
export const ActionsheetStory = () => {
  return (
    <Wrapper>
      <Actionsheet>
        <Actionsheet.Item>Test</Actionsheet.Item>
      </Actionsheet>
    </Wrapper>
  );
};
const MyActionsheetVariantMeta: ComponentMeta<typeof ActionsheetStory> = {
  title: 'recipes/Actionsheet',
  component: ActionsheetStory,
};

export default MyActionsheetVariantMeta;
