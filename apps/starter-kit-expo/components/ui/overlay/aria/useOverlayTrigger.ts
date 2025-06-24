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

import { HTMLAttributes, RefObject } from 'react';
import { OverlayTriggerState } from '@react-stately/overlays';

interface OverlayTriggerProps {
  /** Type of overlay that is opened by the trigger. */
  type: 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
}

interface OverlayTriggerAria {
  /** Props for the trigger element. */
  triggerProps: any;

  /** Props for the overlay container element. */
  overlayProps: HTMLAttributes<HTMLElement>;
}

/**
 * Handles the behavior and accessibility for an overlay trigger, e.g. a button
 * that opens a popover, menu, or other overlay that is positioned relative to the trigger.
 */
export function useOverlayTrigger(
  _props: OverlayTriggerProps,
  state: OverlayTriggerState,
  _ref: RefObject<HTMLElement>
): OverlayTriggerAria {
  return {
    triggerProps: {
      'aria-expanded': state.isOpen,
    },
    overlayProps: {},
  };
}
