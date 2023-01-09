import React, { memo } from 'react';
import { Actionsheet as GlueStackActionsheet } from '@gluestack/ui';

export const Actionsheet = memo(({ ...props }) => {
  return <GlueStackActionsheet {...props} />;
});
