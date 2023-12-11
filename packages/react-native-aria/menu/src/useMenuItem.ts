import type { Key, RefObject } from 'react';
import type { TreeState } from '@react-stately/tree';
import { usePress } from '@react-native-aria/interactions';

interface MenuItemAria {
  /** Props for the menu item element. */
  menuItemProps: any;

  /** Props for the main text element inside the menu item. */
  labelProps: any;

  /** Props for the description text element inside the menu item, if any. */
  descriptionProps: any;

  /** Props for the keyboard shortcut text element inside the item, if any. */
  keyboardShortcutProps: any;
}

interface AriaMenuItemProps {
  /** Whether the menu item is disabled. */
  'isDisabled'?: boolean;

  /** Whether the menu item is selected. */
  'isSelected'?: boolean;

  /** A screen reader only label for the menu item. */
  'aria-label'?: string;

  /** The unique key for the menu item. */
  'key'?: any;

  /** Handler that is called when the menu should close after selecting an item. */
  'onClose'?: () => void;

  /**
   * Whether the menu should close when the menu item is selected.
   * @default true
   */
  'closeOnSelect'?: boolean;

  /** Whether the menu item is contained in a virtual scrolling menu. */
  'isVirtualized'?: boolean;

  /** Handler that is called when the user activates the item. */
  'onAction'?: (key: Key) => void;
}

/**
 * Provides the behavior and accessibility implementation for an item in a menu.
 * See `useMenu` for more details about menus.
 * @param props - Props for the item.
 * @param state - State for the menu, as returned by `useTreeState`.
 */
export function useMenuItem<T>(
  props: AriaMenuItemProps,
  state: TreeState<T>,
  _ref: RefObject<HTMLElement>
): MenuItemAria {
  let {
    isSelected,
    isDisabled,
    onClose,
    closeOnSelect = true,
    onAction,
  } = props;

  const { pressProps } = usePress({
    isDisabled,
    onPress: () => {
      state.selectionManager.select(props.key);
      onAction && onAction(props.key);
      if (closeOnSelect && onClose) onClose();
    },
  });

  return {
    menuItemProps: {
      'role': 'menuitem',
      'aria-selected': isSelected,
      'aria-disabled': isDisabled,
      ...pressProps,
    },
    labelProps: {},
    descriptionProps: {},
    keyboardShortcutProps: {},
  };
}
