import React, { memo } from 'react';
import { Image as GlueStackImage } from '@gluestack/ui';

export const Image = memo(({ ...props }) => {
  return <GlueStackImage {...props} />;
});
