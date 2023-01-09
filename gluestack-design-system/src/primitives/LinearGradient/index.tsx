import React, { memo } from 'react';
import { LinearGradient as GlueStackLinearGradient } from '@gluestack/ui';

export const LinearGradient = memo(({ ...props }) => {
  return <GlueStackLinearGradient {...props} />;
});
