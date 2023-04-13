/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { MenuContext } from '../MenuContext';
export function Popover({ StyledBackdrop, ...props }: any) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { state, children } = props;
  const { showBackdrop, onClose } = React.useContext(MenuContext);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
      isNonModal: true,
    },
    state
  );

  if (!state.isOpen) {
    return null;
  }

  return (
    <Overlay>
      {showBackdrop.current && (
        <StyledBackdrop
          {...underlayProps}
          onPress={onClose}
          focusable={false}
        />
      )}
      <View {...popoverProps} ref={ref}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </View>
    </Overlay>
  );
}
