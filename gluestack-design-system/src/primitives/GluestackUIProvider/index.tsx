import React, { memo } from 'react';
import { GluestackUIProvider as GlueStackGluestackUIProvider } from '@gluestack/ui';

export const GluestackUIProvider = memo(({ ...props }) => {
  return <GlueStackGluestackUIProvider {...props} />;
});
