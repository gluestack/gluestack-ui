'use client';
import React from 'react';
import { Overlay as _Overlay } from '@gluestack-ui/core/overlay/creator';
import { withUniwind } from 'uniwind';

const Overlay = withUniwind(_Overlay);


const Portal = React.forwardRef<
  React.ComponentRef<typeof Overlay>,
  React.ComponentProps<typeof Overlay>
>(function Portal({ ...props }, ref) {
  return <Overlay {...props} ref={ref} />;
});

Portal.displayName = 'Portal';

export { Portal };
