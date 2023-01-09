import React, { memo } from 'react';
import { Modal as GlueStackModal } from '@gluestack/ui';

export const Modal = memo(({ ...props }) => {
  return <GlueStackModal {...props} />;
});
