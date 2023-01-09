import React, { memo } from 'react';
import { Text as GlueStackText } from '@gluestack/ui';

export const Text = memo(({ ...props }) => {
  return <GlueStackText {...props} />;
});
