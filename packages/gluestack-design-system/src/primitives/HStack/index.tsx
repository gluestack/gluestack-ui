import React, { memo } from 'react';
import { HStack as GlueStackHStack } from '@gluestack/ui';

export const HStack = memo(({ ...props }) => {
  return <GlueStackHStack {...props} />;
});
