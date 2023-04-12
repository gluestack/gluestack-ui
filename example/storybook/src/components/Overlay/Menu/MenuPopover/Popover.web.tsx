import React from 'react';
import { View } from 'react-native';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';

export function Popover(props: any) {
  let ref = React.useRef<HTMLDivElement>(null);
  let { state, children } = props;

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
    },
    state
  );
  // if (!state.isOpen) return null;
  return (
    <Overlay>
      <View {...underlayProps} style={{ position: 'fixed' }} />
      <View
        {...popoverProps}
        ref={ref}
        style={{
          ...popoverProps.style,
          zIndex: 10,
          borderRadius: 4,
          marginTop: 2,
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </View>
    </Overlay>
  );
}
