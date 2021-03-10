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

import { ElementType } from 'react';
import { AriaToggleButtonProps } from '@react-types/button';
import { useButton } from './useButton';
import { chain } from '@react-aria/utils';
import { mergeProps } from '@react-aria/utils';
import { ToggleState } from '@react-stately/toggle';

/**
 * Provides the behavior and accessibility implementation for a toggle button component.
 * ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.
 */
export function useToggleButton(
  props: AriaToggleButtonProps<ElementType>,
  state: ToggleState
): any {
  /* eslint-enable no-redeclare */
  const { isSelected } = state;
  const { isPressed, buttonProps } = useButton({
    ...props,
    onPress: chain(state.toggle, props.onPress),
  });

  return {
    isPressed,
    buttonProps: mergeProps(buttonProps, {
      // For v0.14+
      'aria-pressed': isSelected,

      // For v0.15+
      'accessibilityPressed': isSelected,
    }),
  };
}
