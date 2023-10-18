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

import { getItemCount } from '@react-stately/collections';
import { Key, RefObject } from 'react';
import { isFocusVisible, useKeyboard } from '@react-aria/interactions';
import { useHover, usePress } from '@react-native-aria/interactions';
import { mapDomPropsToRN } from '@react-native-aria/utils';
import { mergeProps, useSlotId } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { TreeState } from '@react-stately/tree';
import { useSelectableItem } from '@react-aria/selection';
import { ViewProps } from 'react-native';
interface MenuItemAria {
  /** Props for the menu item element. */
  menuItemProps: ViewProps;

  /** Props for the main text element inside the menu item. */
  labelProps: ViewProps;

  /** Props for the description text element inside the menu item, if any. */
  descriptionProps: ViewProps;

  /** Props for the keyboard shortcut text element inside the item, if any. */
  keyboardShortcutProps: ViewProps;
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
  ref: RefObject<HTMLElement>
): MenuItemAria {
  let {
    isSelected,
    isDisabled,
    key,
    onClose,
    closeOnSelect = true,
    isVirtualized,
    onAction,
  } = props;

  let role = 'menuitem';
  if (state.selectionManager.selectionMode === 'single') {
    role = 'menuitemradio';
  } else if (state.selectionManager.selectionMode === 'multiple') {
    role = 'menuitemcheckbox';
  }

  let labelId = useSlotId();
  let descriptionId = useSlotId();
  let keyboardId = useSlotId();

  let ariaProps: any = {
    'aria-disabled': isDisabled,
    role,
    'aria-label': props['aria-label'],
    'aria-labelledby': labelId,
    'aria-describedby':
      [descriptionId, keyboardId].filter(Boolean).join(' ') || undefined,
  };
  if (state.selectionManager.selectionMode !== 'none') {
    ariaProps['aria-checked'] = isSelected;
  }

  if (isVirtualized) {
    ariaProps['aria-posinset'] = state.collection.getItem(key).index;
    ariaProps['aria-setsize'] = getItemCount(state.collection);
  }

  let onPressStart = (e: PressEvent) => {
    if (e.pointerType === 'keyboard' && onAction) {
      onAction(key);
    }
  };

  let onPressUp = (e: PressEvent) => {
    if (e.pointerType !== 'keyboard') {
      if (onAction) {
        onAction(key);
      }

      if (closeOnSelect && onClose) {
        onClose();
      }
    }
  };

  let { itemProps } = useSelectableItem({
    selectionManager: state.selectionManager,
    key,
    ref,
    shouldSelectOnPressUp: true,
  });

  let { pressProps } = usePress(
    mergeProps(
      { onPressStart, onPressUp, isDisabled },
      mapDomPropsToRN(itemProps)
    )
  );

  let { hoverProps } = useHover(
    {
      isDisabled,
      onHoverStart() {
        if (!isFocusVisible()) {
          state.selectionManager.setFocused(true);
          state.selectionManager.setFocusedKey(key);
        }
      },
    },
    ref
  );

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      // Ignore repeating events, which may have started on the menu trigger before moving
      // focus to the menu item. We want to wait for a second complete key press sequence.
      if (e.repeat) {
        e.continuePropagation();
        return;
      }
      switch (e.key) {
        case ' ':
          if (
            !isDisabled &&
            state.selectionManager.selectionMode === 'none' &&
            closeOnSelect !== false &&
            onClose
          ) {
            onClose();
          }
          break;
        case 'Enter':
          // The Enter key should always close on select, except if overridden.
          if (!isDisabled && closeOnSelect !== false && onClose) {
            onClose();
          }
          break;
        default:
          e.continuePropagation();
          break;
      }
    },
  });

  return {
    menuItemProps: {
      ...mapDomPropsToRN(ariaProps),
      ...mergeProps(pressProps, hoverProps, keyboardProps),
      role: 'button',
    },
    labelProps: {
      nativeID: labelId,
    },
    descriptionProps: {
      nativeID: descriptionId,
    },
    keyboardShortcutProps: {
      nativeID: keyboardId,
    },
  };
}
