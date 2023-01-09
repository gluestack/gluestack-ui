import React, { memo } from 'react';
import { Toast as GlueStackToast } from '@gluestack/ui';

export const Toast = memo(({ ...props }) => {
  return <GlueStackToast {...props} />;
});
