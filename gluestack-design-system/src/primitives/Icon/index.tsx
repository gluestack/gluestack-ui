import React, { memo } from 'react';
import { Icon as GlueStackIcon } from '@gluestack/ui';

export const Icon = memo(({ ...props }) => {
  return <GlueStackIcon {...props} />;
});
