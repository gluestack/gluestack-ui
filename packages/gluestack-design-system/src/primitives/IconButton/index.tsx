import React, { memo } from 'react';
import { IconButton as GlueStackIconButton } from '@gluestack/ui';

export const IconButton = memo(({ ...props }) => {
  return <GlueStackIconButton {...props} />;
});
