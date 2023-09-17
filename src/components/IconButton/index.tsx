import React, { forwardRef } from 'react';
import { Button } from '../Button';

export const IconButton = forwardRef(
  (
    { icon, ...props }: React.ComponentProps<typeof Button> & { icon: any },
    ref?: any
  ) => {
    return <Button {...props} ref={ref} leftIcon={icon} />;
  }
);
