import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Alert } from './Alert';
export const AlertStory = () => {
  return (
    <Wrapper>
      <Alert />
    </Wrapper>
  );
};
const MyAlertVariantMeta: ComponentMeta<typeof AlertStory> = {
  title: 'recipes/Alert',
  component: AlertStory,
};

export default MyAlertVariantMeta;
