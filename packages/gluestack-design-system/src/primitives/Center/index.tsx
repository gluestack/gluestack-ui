import React, { memo } from 'react';
import { Center as GlueStackCenter } from '@gluestack/ui';

export const Center = memo(({ ...props }) => {
  return <GlueStackCenter {...props} />;
});
