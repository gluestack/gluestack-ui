'use client';
import { Overlay } from '@gluestack-ui/core/overlay/creator';
import { styled } from 'nativewind';
import React from 'react';

const StyledOverlay = styled(Overlay, { className: "style" });

const Portal = React.forwardRef<
  React.ComponentRef<typeof Overlay>,
  React.ComponentProps<typeof Overlay>
>(function Portal({ ...props }, ref) {
  return <StyledOverlay {...props} ref={ref} />;
});

Portal.displayName = 'Portal';

export { Portal };
