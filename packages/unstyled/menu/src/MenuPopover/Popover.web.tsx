import React from 'react';
import { View, I18nManager } from 'react-native';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { MenuContext } from '../MenuContext';
export function Popover({ StyledBackdrop, ...props }: any) {
  const ref = React.useRef(null);
  const { state, children } = props;
  const { onClose } = React.useContext(MenuContext);
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

  // Make position of Popover correct in RTL.
  if (I18nManager.getConstants().isRTL) {
    popoverProps.style = {
      ...popoverProps.style,
      right: popoverProps?.style?.left || 'unset',
      left: 'unset',
    };
  }

  return (
    <Overlay>
      <StyledBackdrop
        {...underlayProps}
        onPress={onClose}
        tabIndex={-1}
        // ios
        accessibilityElementsHidden
        aria-hidden={true}
      />
      {/** @ts-ignore -web only*/}
      <View {...popoverProps} ref={ref}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </View>
    </Overlay>
  );
}
