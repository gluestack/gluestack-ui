import React, { memo } from 'react';
import { Box as GlueStackBox } from '@gluestack/ui';

export const Box = memo(({ ...props }) => {
  return <GlueStackBox {...props} />;
});
