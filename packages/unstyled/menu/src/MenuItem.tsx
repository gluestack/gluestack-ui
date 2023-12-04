import React, { useCallback, useMemo } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing } from '@react-native-aria/focus';
import { useMenuItem } from '@react-native-aria/menu';
import { Platform } from 'react-native';

const usePressed = (onPressIn: () => any, onPressOut: () => any) => {
  if (Platform.OS === 'web') {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut,
      },
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut,
    },
  };
};
export function MenuItem({
  StyledMenuItem,
  item,
  state,
  onAction,
  onClose,
  closeOnSelect,
}: any) {
  const itemProps = { ...item.props };
  // Get props for the menu item element
  const ref = React.useRef(null);
  const {
    menuItemProps: { focusable, ...restMenuProps },
  } = useMenuItem(
    {
      'key': item.key,
      onAction,
      onClose,
      closeOnSelect,
      'aria-label': itemProps.textValue,
      ...itemProps,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  const toggleSelection = useCallback(() => {
    if (Platform.OS === 'web') {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);

  const { focusProps: focusRingProps, isFocusVisible }: any = useFocusRing();
  const { pressProps, isPressed } = usePress({});
  const { isHovered, hoverProps }: any = useHover();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const { children, ...rest } = item.props;

  const { pressEvents } = usePressed(
    // @ts-ignore
    composeEventHandlers(
      composeEventHandlers(rest?.onPressIn, pressProps.onPressIn),
      composeEventHandlers(restMenuProps.onPressIn, toggleSelection)
    ),
    composeEventHandlers(
      composeEventHandlers(rest?.onPressOut, pressProps.onPressOut),
      restMenuProps.onPressOut
    )
  );

  const pressEvents1 = useMemo(
    () => (!state.selectionManager.isDisabled(item.key) ? pressEvents : {}),
    [item.key, pressEvents, state.selectionManager]
  );

  return (
    <StyledMenuItem
      ref={ref}
      tabIndex={focusable === undefined ? -1 : focusable}
      {...restMenuProps}
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusVisible: isFocusVisible,
        selected: state.selectionManager.isSelected(item.key),
        disabled: state.selectionManager.isDisabled(item.key),
      }}
      {...rest}
      {...pressEvents1}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(rest?.onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(rest?.onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(rest?.onFocus, focusRingProps.onFocus),
        restMenuProps?.onFocus
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(rest?.onBlur, focusRingProps.onBlur),
        restMenuProps?.onBlur
      )}
    >
      {children}
    </StyledMenuItem>
  );
}
