import React, { memo } from 'react';
import { AlertDialog as GlueStackAlertDialog } from '@gluestack/ui';

export const AlertDialog = memo(({ ...props }) => {
  return <GlueStackAlertDialog {...props} />;
});
