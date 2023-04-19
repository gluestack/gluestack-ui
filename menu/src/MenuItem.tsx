import React, { forwardRef } from 'react';
import { useFocusRing } from '@react-native-aria/focus';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '@gluestack-ui/utils';
import { useMenu } from './MenuContext';
import {
  useFocus,
  useHover,
  useIsPressed,
} from '@gluestack-ui/react-native-aria';

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}

const MenuItemCreator = (StyledMenuItem: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        onPress,
        textValue,
        ...props
      }: any,
      ref?: any
    ) => {
      const { closeOnSelect, onClose } = useMenu('MenuContext');
      const menuItemRef = React.useRef<any>(null);
      const mergedRef = mergeRefs([menuItemRef, ref]);

      const [textContent, setTextContent] = React.useState('');

      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressableProps, isPressed } = useIsPressed();
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      React.useEffect(() => {
        const menuItem = menuItemRef.current;
        if (menuItem) {
          setTextContent((menuItem.textContent ?? '').trim());
        }
      }, [children]);

      const menuItemProps = useMenuItem({
        textValue: textValue ?? textContent,
        ref: menuItemRef,
      });

      return (
        <StyledMenuItem
          {...menuItemProps}
          ref={mergedRef}
          disabled={isDisabled}
          accessibilityRole="menuitem"
          accessibilityState={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          onPress={(e: any) => {
            if (!isDisabled) {
              onPress && onPress(e);
              if (closeOnSelect) {
                onClose && onClose();
              }
            }
          }}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
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
          focusable={false}
          {...props}
        >
          {children}
        </StyledMenuItem>
      );
    }
  );

export default MenuItemCreator;
