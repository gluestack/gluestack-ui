import React, { memo } from 'react';
import { FormControl as GlueStackFormControl } from '@gluestack/ui';

export const FormControl = memo(({ ...props }) => {
  return <GlueStackFormControl {...props} />;
});
