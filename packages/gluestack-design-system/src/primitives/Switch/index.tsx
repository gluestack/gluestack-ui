import React, { memo } from 'react';
import { Switch as GlueStackSwitch } from '@gluestack/ui';

export const Switch = memo(({ ...props }) => {
  return <GlueStackSwitch {...props} />;
});
