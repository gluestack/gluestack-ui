import React, { useCallback } from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing } from '@react-native-aria/focus';
import { useMenuItem } from '@react-native-aria/menu';
import { Platform } from 'react-native';

const usePressed = (
  onPressIn: () => any,
  onPressOut: () => any,
  onPress: () => any,
  isDisabled: boolean
) => {
  if (isDisabled) return {};

  return {
    pressEvents: {
      onPressIn,
      onPressOut,
      onPress,
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
      rest?.onPressIn,
      composeEventHandlers(restMenuProps.onPressIn, toggleSelection)
    ),
    composeEventHandlers(rest?.onPressOut, restMenuProps.onPressOut),
    composeEventHandlers(rest?.onPress, restMenuProps.onPress),
    state.selectionManager.isDisabled(item.key)
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
      dataSet={{
        hover: isHovered ? 'true' : 'false',
        focus: isFocused ? 'true' : 'false',
        active: isPressed ? 'true' : 'false',
        focusVisible: isFocusVisible ? 'true' : 'false',
        selected: state.selectionManager.isSelected(item.key)
          ? 'true'
          : 'false',
        disabled: state.selectionManager.isDisabled(item.key)
          ? 'true'
          : 'false',
      }}
      {...rest}
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
      onPressIn={composeEventHandlers(
        pressProps.onPressIn,
        pressEvents?.onPressIn
      )}
      onPress={composeEventHandlers(pressProps.onPress, pressEvents?.onPress)}
      onPressOut={composeEventHandlers(
        pressProps.onPressOut,
        pressEvents?.onPressOut
      )}
    >
      {children}
    </StyledMenuItem>
  );
}
