import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { useHover, useFocus, useIsPressed } from '../ReactNativeAria';
import { composeEventHandlers } from '../utils';
import { useFocusRing } from '@react-native-aria/focus';
import { CloseIcon } from '../Icon';

const AlertDialogCloseButton = (StyledAlertDialogCloseButton: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const { hoverProps, isHovered } = useHover();
      const { pressableProps, isPressed } = useIsPressed();
      const { focusProps, isFocused } = useFocus();
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();

      const {
        // _icon,
        onPressIn,
        onPressOut,
        onHoverIn,
        onHoverOut,
        onFocus,
        onBlur,
        ...resolvedProps
      } = props;
      const { handleClose } = React.useContext(AlertDialogContext);

      return (
        <StyledAlertDialogCloseButton
          accessibilityRole="button"
          ref={ref}
          onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
          onPressOut={composeEventHandlers(
            onPressOut,
            pressableProps.onPressOut
          )}
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
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          disabled={isDisabled}
          {...resolvedProps}
        >
          {children ?? <CloseIcon />}
        </StyledAlertDialogCloseButton>
      );
    }
  );

export default AlertDialogCloseButton;
