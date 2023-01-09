import React, { memo } from 'react';
import { Actiosheet as GlueStackActiosheet } from '@gluestack/ui';

export const Actiosheet = memo(({ ...props }) => {
  return <GlueStackActiosheet {...props} />;
});
