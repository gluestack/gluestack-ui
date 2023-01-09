import React, { memo } from 'react';
import { Heading as GlueStackHeading } from '@gluestack/ui';

export const Heading = memo(({ ...props }) => {
  return <GlueStackHeading {...props} />;
});
