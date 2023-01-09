import React, { memo } from 'react';
import { TextArea as GlueStackTextArea } from '@gluestack/ui';

export const TextArea = memo(({ ...props }) => {
  return <GlueStackTextArea {...props} />;
});
