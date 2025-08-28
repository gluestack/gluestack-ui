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

import React, { useState } from 'react';
import { PanResponder } from 'react-native';

interface MoveResult {
  /** Props to spread on the target element. */
  moveProps: any;
}

/**
 * Handles move interactions across mouse, touch, and keyboard, including dragging with
 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
 * platforms, and ignores emulated mouse events on touch devices.
 */
export function useMove(props: any): MoveResult {
  let { onMoveStart, onMove, onMoveEnd } = props;

  const [initialMoveX, setInitialMoveX] = useState(0);
  const [initialMoveY, setInitialMoveY] = useState(0);
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_event) => {
          return true;
        },
        onPanResponderGrant: (_evt, gestureState) => {
          onMoveStart?.({
            type: 'movestart',
            pointerType: 'touch',
          });
          setInitialMoveX(gestureState.moveX);
          setInitialMoveY(gestureState.moveY);
        },
        onPanResponderMove: (_event, gestureState) => {
          const deltaX = gestureState.moveX - initialMoveX;
          const deltaY = gestureState.moveY - initialMoveY;
          if (deltaX === 0 && deltaY === 0) {
            return;
          }

          if (deltaX) {
            onMove({
              type: 'move',
              pointerType: 'touch',
              deltaX: deltaX,
              deltaY: deltaY,
            });
          }
        },
        onPanResponderRelease: () => {
          onMoveEnd?.({
            type: 'moveend',
            pointerType: 'touch',
          });
        },
      }),
    [onMove, onMoveEnd, onMoveStart, initialMoveX, initialMoveY]
  );

  return { moveProps: panResponder.panHandlers };
}
