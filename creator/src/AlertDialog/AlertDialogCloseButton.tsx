import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
// import { CloseIcon } from '../../primitives/Icon/Icons';
import { useHover, useFocus, useIsPressed } from '../ReactNativeAria';
import { composeEventHandlers } from '../utils';
import { useFocusRing } from '@react-native-aria/focus';
import { UIContext } from '../UIProvider';
import { Text } from 'react-native';

const AlertDialogCloseButton = (props: any, ref?: any) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

  const { StyledAlertDialogCloseButton } = React.useContext(UIContext);

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
      <Text>X</Text>
    </StyledAlertDialogCloseButton>
  );
};

export default forwardRef(AlertDialogCloseButton);
