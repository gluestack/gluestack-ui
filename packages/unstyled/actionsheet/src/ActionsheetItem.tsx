import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef, createContext } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { usePress, useHover } from '@react-native-aria/interactions';
import type { InterfaceActionsheetItemProps } from './types';
export const ActionsheetContext = createContext<any>({});

export function ActionsheetItem<T>(
  StyledActionsheetItem: React.ComponentType<T>
) {
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
      }: T & InterfaceActionsheetItemProps,
      ref?: any
    ) => {
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

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
          {...(props as T)}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
            // @ts-ignore
            ...props.states,
          }}
          dataSet={{
            hover: isHoveredProp || isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            active:
              // @ts-ignore
              isPressedProp || isPressed || props?.states?.active
                ? 'true'
                : 'false',
            disabled: isDisabled ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
            // @ts-ignore
            ...props.dataSet,
          }}
        >
          {children}
        </StyledActionsheetItem>
      );
    }
  );
}
