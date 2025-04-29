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

import type { AriaMenuProps } from '@react-types/menu';
import type { RefObject } from 'react';
import type { KeyboardDelegate } from '@react-types/shared';
import type { TreeState } from '@react-stately/tree';
import type { AccessibilityProps } from 'react-native';

interface MenuAria {
  /** Props for the menu element. */
  menuProps: AccessibilityProps;
}

interface AriaMenuOptions<T> extends AriaMenuProps<T> {
  /** Whether the menu uses virtual scrolling. */
  isVirtualized?: boolean;

  /**
   * An optional keyboard delegate implementation for type to select,
   * to override the default.
   */
  keyboardDelegate?: KeyboardDelegate;
}

/**
 * Provides the behavior and accessibility implementation for a menu component.
 * A menu displays a list of actions or options that a user can choose.
 * @param props - Props for the menu.
 * @param state - State for the menu, as returned by `useListState`.
 */
export function useMenu<T>(
  _props: AriaMenuOptions<T>,
  _state: TreeState<T>,
  _ref: RefObject<HTMLElement>
): MenuAria {
  return {
    menuProps: {
      role: 'menu',
    },
  };
}
