import React, { memo } from 'react';
import { Input as GlueStackInput } from '@gluestack/ui';

export const Input = memo(({ ...props }) => {
  return <GlueStackInput {...props} />;
});
