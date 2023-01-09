import React, { memo } from 'react';
import { Select as GlueStackSelect } from '@gluestack/ui';

export const Select = memo(({ ...props }) => {
  return <GlueStackSelect {...props} />;
});
