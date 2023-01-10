import React, { memo } from 'react';
import { Alert as GlueStackAlert } from '@gluestack/ui';

export const Alert = memo(({ ...props }) => {
  return <GlueStackAlert {...props} />;
});
