import { useFocusRing } from "@react-native-aria/focus";
import React, { createContext, useState } from "react";
import type { ButtonProps } from "./types";
import { UIContext } from "../UIProvider";
export const ButtonContext = createContext<any>({});

export const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };
};

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}

export function Button({ children, ...props }: ButtonProps) {
  // ref: any
  let { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();
  const { pressableProps, isPressed } = useIsPressed();
  let { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();
  const { StyledButton } = React.useContext(UIContext);

  return (
    <StyledButton
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
      }}
      {...props}
      onPressIn={composeEventHandlers(
        props?.onPressIn,
        pressableProps.onPressIn
      )}
      onPressOut={composeEventHandlers(
        props?.onPressOut,
        pressableProps.onPressOut
      )}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(props?.onHoverIn, hoverProps.onHoverIn)}
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
      // ref={ref}
    >
      {({ resolveContextChildrenStyle }: any) => {
        return (
          <ButtonContext.Provider
            value={{
              resolveContextChildrenStyle: resolveContextChildrenStyle,
            }}
          >
            {children}
          </ButtonContext.Provider>
        );
      }}
    </StyledButton>
  );
}
