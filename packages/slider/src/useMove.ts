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

import { disableTextSelection, restoreTextSelection } from './textSelection';
import { MoveEvents, PointerType } from '@react-types/shared';
import React, { HTMLAttributes, useMemo, useRef } from 'react';
import { useGlobalListeners } from '@react-aria/utils';

interface MoveResult {
  /** Props to spread on the target element. */
  moveProps: HTMLAttributes<HTMLElement>;
}

/**
 * Handles move interactions across mouse, touch, and keyboard, including dragging with
 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
 * platforms, and ignores emulated mouse events on touch devices.
 */
export function useMove(props: MoveEvents): MoveResult {
  let { onMoveStart, onMove, onMoveEnd } = props;

  let state = useRef<{
    didMove: boolean;
    lastPosition: { pageX: number; pageY: number } | null;
    id: number | null;
  }>({ didMove: false, lastPosition: null, id: null });

  let moveProps = useMemo(() => {
    return {};
  }, [state, onMoveStart, onMove, onMoveEnd]);

  return { moveProps };
}
