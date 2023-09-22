import React, { forwardRef } from 'react';
import { Button } from '../Button';
import { GenericComponentType } from '../../types';

const IconButtonTemp = forwardRef(({ icon, ...props }: any, ref?: any) => {
  return <Button {...props} ref={ref} leftIcon={icon} />;
});

export const IconButton = IconButtonTemp as GenericComponentType<typeof Button>;
