import React, { memo } from 'react';
import { Radio as GlueStackRadio } from '@gluestack/ui';

export const Radio = memo(({ ...props }) => {
  return <GlueStackRadio {...props} />;
});
