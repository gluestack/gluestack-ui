import React, { memo } from 'react';
import { Divider as GlueStackDivider } from '@gluestack/ui';

export const Divider = memo(({ ...props }) => {
  return <GlueStackDivider {...props} />;
});
