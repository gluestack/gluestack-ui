import React, { memo } from 'react';
import { VStack as GlueStackVStack } from '@gluestack/ui';

export const VStack = memo(({ ...props }) => {
  return <GlueStackVStack {...props} />;
});
