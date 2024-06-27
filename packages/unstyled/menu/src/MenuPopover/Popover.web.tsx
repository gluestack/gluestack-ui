import React, { useEffect } from 'react';
import { View } from 'react-native';
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays';
import { MenuContext } from '../MenuContext';
import { useFocus } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';

export function Popover({ StyledBackdrop, setContentState, ...props }: any) {
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

  const { focusProps, isFocused } = useFocus();
  const { hoverProps, isHovered } = useHover();

  useEffect(() => {
    if (setContentState) {
      // console.log('content isFocused', isFocused);
      // console.log('content isHovered', isHovered);
      setContentState({
        isContentFocused: isFocused,
        isContentHovered: isHovered,
      });
    }
  }, [isFocused, isHovered, setContentState]);

  if (!state.isOpen) {
    return null;
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
      <View {...popoverProps} ref={ref} {...focusProps} {...hoverProps}>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </View>
    </Overlay>
  );
}
