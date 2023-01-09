import React, { memo } from 'react';
import { Provider as GlueStackProvider } from '@gluestack/ui';

export const Provider = memo(({ ...props }) => {
  return <GlueStackProvider {...props} />;
});
