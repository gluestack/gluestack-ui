import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
// import { CloseIcon } from '../../primitives/Icon/Icons';
import { useHover, useFocus, useIsPressed } from '../ReactNativeAria';
import { composeEventHandlers } from '../utils';
import { useFocusRing } from '@react-native-aria/focus';
import { CloseIcon } from '../Icon';

const ModalCloseButton = (StyledModalCloseButton: any) =>
  forwardRef((props: any, ref?: any) => {
    const { hoverProps, isHovered } = useHover();
    const { pressableProps, isPressed } = useIsPressed();
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
        accessibilityRole="button"
        ref={ref}
        onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
        onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
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
        {children ?? <CloseIcon />}
      </StyledModalCloseButton>
    );
  });

export default ModalCloseButton;
