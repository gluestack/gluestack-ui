import React, { memo } from 'react';
import { Badge as GlueStackBadge } from '@gluestack/ui';

export const Badge = memo(({ ...props }) => {
  return <GlueStackBadge {...props} />;
});
