import { useFocusRing } from '@react-native-aria/focus';
import React, { createContext, forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { useFocus, useHover, useIsPressed } from '../ReactNativeAria';

export const ButtonContext = createContext<any>({});

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}

const Button = ({ children, isDisabled, ...props }: any, ref: any) => {
  // ref: any
  const { focusProps: focusRingProps }: any = useFocusRing();
  const { pressableProps, isPressed } = useIsPressed();
  const { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();
  const { StyledButton } = React.useContext(UIContext);

  return (
    <StyledButton
      ref={ref}
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        disabled: isDisabled,
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
};

export default forwardRef(Button);
