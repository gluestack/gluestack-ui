import React, { memo } from 'react';
import { Link as GlueStackLink } from '@gluestack/ui';

export const Link = memo(({ ...props }) => {
  return <GlueStackLink {...props} />;
});
