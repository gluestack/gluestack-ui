import React, { memo } from 'react';
import { Checkbox as GlueStackCheckbox } from '@gluestack/ui';

export const Checkbox = memo(({ ...props }) => {
  return <GlueStackCheckbox {...props} />;
});
