import React, { memo } from 'react';
import { Spinner as GlueStackSpinner } from '@gluestack/ui';

export const Spinner = memo(({ ...props }) => {
  return <GlueStackSpinner {...props} />;
});
