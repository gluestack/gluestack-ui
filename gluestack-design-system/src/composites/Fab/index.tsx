import React, { memo } from 'react';
import { Fab as GlueStackFab } from '@gluestack/ui';

export const Fab = memo(({ ...props }) => {
  return <GlueStackFab {...props} />;
});
