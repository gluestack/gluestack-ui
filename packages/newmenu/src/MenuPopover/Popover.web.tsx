/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';

export function Popover({ ...props }: any) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { state, children } = props;

  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  );

  if (!state.isOpen) {
    return null;
  }
  return (
    <Overlay>
      <View {...underlayProps} style={{ position: 'fixed' }} />
      <View
        {...popoverProps}
        ref={ref}
        style={{
          ...popoverProps.style,
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </View>
    </Overlay>
  );
}
