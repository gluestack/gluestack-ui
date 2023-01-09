import React, { memo } from 'react';
import { Popover as GlueStackPopover } from '@gluestack/ui';

export const Popover = memo(({ ...props }) => {
  return <GlueStackPopover {...props} />;
});
