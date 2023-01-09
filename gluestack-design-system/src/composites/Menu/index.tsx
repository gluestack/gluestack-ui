import React, { memo } from 'react';
import { Menu as GlueStackMenu } from '@gluestack/ui';

export const Menu = memo(({ ...props }) => {
  return <GlueStackMenu {...props} />;
});
