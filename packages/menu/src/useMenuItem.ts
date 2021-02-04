/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import type { HTMLAttributes, Key, RefObject } from "react";
import type { TreeState } from "@react-stately/tree";
import { usePress } from "@react-native-aria/interactions";

interface MenuItemAria {
  /** Props for the menu item element. */
  menuItemProps: HTMLAttributes<HTMLElement>;

  /** Props for the main text element inside the menu item. */
  labelProps: HTMLAttributes<HTMLElement>;

  /** Props for the description text element inside the menu item, if any. */
  descriptionProps: HTMLAttributes<HTMLElement>;

  /** Props for the keyboard shortcut text element inside the item, if any. */
  keyboardShortcutProps: HTMLAttributes<HTMLElement>;
}

interface AriaMenuItemProps {
  /** Whether the menu item is disabled. */
  isDisabled?: boolean;

  /** Whether the menu item is selected. */
  isSelected?: boolean;

  /** A screen reader only label for the menu item. */
  "aria-label"?: string;

  /** The unique key for the menu item. */
  key?: any;

  /** Handler that is called when the menu should close after selecting an item. */
  onClose?: () => void;

  /**
   * Whether the menu should close when the menu item is selected.
   * @default true
   */
  closeOnSelect?: boolean;

  /** Whether the menu item is contained in a virtual scrolling menu. */
  isVirtualized?: boolean;

  /** Handler that is called when the user activates the item. */
  onAction?: (key: Key) => void;
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
      accessibilityRole: "menuitem",
      accessibilityState: {
        selected: isSelected,
        disabled: isDisabled,
      },
      ...pressProps,
    },
    labelProps: {},
    descriptionProps: {},
    keyboardShortcutProps: {},
  };
}
