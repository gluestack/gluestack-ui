import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Actionsheet } from './Actionsheet';
export const ActionsheetStory = () => {
  return <Actionsheet />;
};
const MyActionsheetVariantMeta: ComponentMeta<typeof ActionsheetStory> = {
  title: 'components/stories/Actionsheet',
  component: ActionsheetStory,
};

export default MyActionsheetVariantMeta;
