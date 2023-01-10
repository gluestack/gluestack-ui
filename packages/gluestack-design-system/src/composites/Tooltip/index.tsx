import React, { memo } from 'react';
import { Tooltip as GlueStackTooltip } from '@gluestack/ui';

export const Tooltip = memo(({ ...props }) => {
  return <GlueStackTooltip {...props} />;
});
