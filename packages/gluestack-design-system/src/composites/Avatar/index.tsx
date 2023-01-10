import React, { memo } from 'react';
import { Avatar as GlueStackAvatar } from '@gluestack/ui';

export const Avatar = memo(({ ...props }) => {
  return <GlueStackAvatar {...props} />;
});
