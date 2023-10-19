import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useFocusRing, useFocus } from '@react-native-aria/focus';

const ModalCloseButton = (StyledModalCloseButton: any) =>
  forwardRef((props: any, ref?: any) => {
    const { hoverProps, isHovered } = useHover();
    const { pressProps, isPressed } = usePress({
      isDisabled: props.isDisabled,
    });
    const { focusProps, isFocused } = useFocus();
    const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

    const {
      // _icon,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      onFocus,
      onBlur,
      children,
      ...resolvedProps
    } = props;
    const { handleClose } = React.useContext(ModalContext);

    return (
      <StyledModalCloseButton
        role="button"
        ref={ref}
        onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)}
        onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)}
        // @ts-ignore - web only
        onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
        // @ts-ignore - web only
        onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
        // @ts-ignore - web only
        onFocus={composeEventHandlers(
          composeEventHandlers(onFocus, focusProps.onFocus),
          focusRingProps.onFocus
        )}
        // @ts-ignore - web only
        onBlur={composeEventHandlers(
          composeEventHandlers(onBlur, focusProps.onBlur),
          focusRingProps.onBlur
        )}
        onPress={handleClose}
        states={{
          hover: isHovered,
          focus: isFocused,
          active: isPressed,
          focusVisible: isFocusVisible,
        }}
        {...resolvedProps}
      >
        {children}
      </StyledModalCloseButton>
    );
  });

export default ModalCloseButton;
