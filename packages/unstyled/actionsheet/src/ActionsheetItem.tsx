import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef, createContext } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { usePress, useHover } from '@react-native-aria/interactions';
import { Platform } from 'react-native';
export const ActionsheetContext = createContext<any>({});

export function ActionsheetItem(StyledActionsheetItem: any) {
  return forwardRef(
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
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();
      const pointerEvents =
        Platform.OS === 'web' ? 'all !important' : undefined;

      return (
        <StyledActionsheetItem
          ref={ref}
          disabled={isDisabled}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressProps.onPressOut
          )}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(
            props?.onHoverIn,
            hoverProps.onHoverIn
          )}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(
            props?.onHoverOut,
            hoverProps.onHoverOut
          )}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(props?.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          {...props}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            // @ts-ignore
            active: isPressedProp || isPressed || props?.states?.active,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          style={[{ pointerEvents }, { ...props.style }]}
        >
          {children}
        </StyledActionsheetItem>
      );
    }
  );
}
