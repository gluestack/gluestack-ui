import React, { memo } from 'react';
import { Pressable as GlueStackPressable } from '@gluestack/ui';

export const Pressable = memo(({ ...props }) => {
  return <GlueStackPressable {...props} />;
});
