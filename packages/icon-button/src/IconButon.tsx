import React, { createContext, forwardRef } from 'react';
import {
  useFocus,
  useHover,
  useIsPressed,
} from '@gluestack-ui/react-native-aria';
import { useFocusRing } from '@react-native-aria/focus';
import type { IIconButtonProps } from './types';

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}

export const IconButtonContext = createContext<any>({});

function IconButon<StyledIconButton>(
  StyledIconButton: React.ComponentType<StyledIconButton>
) {
  return forwardRef(
    (
      { children, isDisabled, ...props }: StyledIconButton & IIconButtonProps,
      ref: any
    ) => {
      let { focusProps: focusRingProps, isFocusVisible }: any = useFocusRing();
      const { pressableProps, isPressed } = useIsPressed();
      let { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledIconButton
          ref={ref}
          {...(props as StyledIconButton)}
          accessibilityRole="button"
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
          }}
          disabled={isDisabled}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressableProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressableProps.onPressOut
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
        >
          {typeof children === 'function'
            ? children({ isHovered, isActive: isPressed, isFocused })
            : children}
        </StyledIconButton>
      );
    }
  );
}
export default IconButon;
