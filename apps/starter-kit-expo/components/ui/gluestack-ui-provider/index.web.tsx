import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import React from 'react';

export function GluestackUIProvider({
  ...props
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </>
  );
}
