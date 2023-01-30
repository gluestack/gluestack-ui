import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { AlertDialog } from './AlertDialog';
export const AlertDialogStory = () => {
  return <AlertDialog />;
};
const MyAlertDialogVariantMeta: ComponentMeta<typeof AlertDialogStory> = {
  title: 'components/stories/AlertDialog',
  component: AlertDialogStory,
};

export default MyAlertDialogVariantMeta;
