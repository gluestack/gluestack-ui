import React, { memo } from 'react';
import { Button as GlueStackButton } from '@gluestack/ui';

export const Button = memo(({ ...props }) => {
  return <GlueStackButton {...props} />;
});
