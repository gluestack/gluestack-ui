import React, { memo } from 'react';
import { Transitions as GlueStackTransitions } from '@gluestack/ui';

export const Transitions = memo(({ ...props }) => {
  return <GlueStackTransitions {...props} />;
});
