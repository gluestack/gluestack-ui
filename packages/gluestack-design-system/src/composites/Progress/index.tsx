import React, { memo } from 'react';
import { Progress as GlueStackProgress } from '@gluestack/ui';

export const Progress = memo(({ ...props }) => {
  return <GlueStackProgress {...props} />;
});
