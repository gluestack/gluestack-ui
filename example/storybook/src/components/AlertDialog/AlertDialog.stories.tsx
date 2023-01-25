import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { AlertDialog } from './AlertDialog';
export const AlertDialogStory = () => {
  return (
    <Wrapper>
      <AlertDialog />
    </Wrapper>
  );
};
const MyAlertDialogVariantMeta: ComponentMeta<typeof AlertDialogStory> = {
  title: 'components/stories/AlertDialog',
  component: AlertDialogStory,
};

export default MyAlertDialogVariantMeta;
