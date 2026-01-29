import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import React, { forwardRef } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
import { usePress, useHover } from '@gluestack-ui/utils/aria';
import { BottomSheetContext } from './context';
import type { InterfaceBottomSheetItemProps } from './types';

export function BottomSheetItem<T>(
  StyledBottomSheetItem: React.ComponentType<T>
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
        closeOnPress = true,
        ...props
      }: InterfaceBottomSheetItemProps,
      ref?: any
    ) => {
      const { handleClose } = React.useContext(BottomSheetContext);
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledBottomSheetItem
          ref={ref}
          disabled={isDisabled}
          onPress={composeEventHandlers(
            props?.onPress,
            closeOnPress ? handleClose : undefined
          )}
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
        </StyledBottomSheetItem>
      );
    }
  );
}
