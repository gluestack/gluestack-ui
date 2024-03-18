import { AriaSliderProps } from '@react-types/slider';
import { clamp, mergeProps, useGlobalListeners } from '@react-aria/utils';
import { getSliderThumbId, sliderIds } from './utils';
import React, { useRef } from 'react';
import { setInteractionModality } from '@react-aria/interactions';
import { SliderState } from '@react-stately/slider';
import { useLabel } from '@react-aria/label';
import { mapDomPropsToRN, isRTL } from '@react-native-aria/utils';
import { useMove } from './useMove';

interface SliderAria {
  /** Props for the label element. */
  labelProps: any;

  /** Props for the root element of the slider component; groups slider inputs. */
  groupProps: any;

  /** Props for the track element. */
  trackProps: any;

  /** Props for the output element, displaying the value of the slider thumbs. */
  outputProps: any;
}

function useSliderWeb(
  props: AriaSliderProps,
  state: SliderState,
  trackLayout: {
    height: number;
    width: number;
    top: number;
    left: number;
    x: number;
    y: number;
  },
  isReversed?: boolean
): SliderAria {
  let { labelProps, fieldProps } = useLabel(props);

  let isVertical = props.orientation === 'vertical';

  // Attach id of the label to the state so it can be accessed by useSliderThumb.
  sliderIds.set(state, labelProps.id ?? fieldProps.id);

  const direction = isRTL() ? 'rtl' : undefined;

  let { addGlobalListener, removeGlobalListener } = useGlobalListeners();

  // When the user clicks or drags the track, we want the motion to set and drag the
  // closest thumb.  Hence we also need to install useMove() on the track element.
  // Here, we keep track of which index is the "closest" to the drag start point.
  // It is set onMouseDown/onTouchDown; see trackProps below.
  const realTimeTrackDraggingIndex = useRef<number | null>(null);

  const stateRef = useRef<SliderState>(null);
  stateRef.current = state;
  const reverseX = isReversed || direction === 'rtl';

  const currentPosition = useRef<number>(null);
  const { moveProps } = useMove({
    onMoveStart() {
      currentPosition.current = null;
    },
    onMove({ deltaX, deltaY }) {
      let size = isVertical ? trackLayout.height : trackLayout.width;

      if (currentPosition.current == null) {
        currentPosition.current =
          stateRef.current.getThumbPercent(realTimeTrackDraggingIndex.current) *
          size;
      }

      let delta = isVertical ? deltaY : deltaX;
      if (reverseX) {
        if (!isVertical) {
          delta = -delta;
        }
      } else {
        if (isVertical) {
          delta = -delta;
        }
      }

      currentPosition.current += delta;

      if (realTimeTrackDraggingIndex.current != null) {
        const percent = clamp(currentPosition.current / size, 0, 1);
        stateRef.current.setThumbPercent(
          realTimeTrackDraggingIndex.current,
          percent
        );
      }
    },
    onMoveEnd() {
      if (realTimeTrackDraggingIndex.current != null) {
        stateRef.current.setThumbDragging(
          realTimeTrackDraggingIndex.current,
          false
        );
        realTimeTrackDraggingIndex.current = null;
      }
    },
  });

  let currentPointer = useRef<number | null | undefined>(undefined);
  let onDownTrack = (
    e: React.UIEvent,
    id: number,
    clientX: number,
    clientY: number
  ) => {
    // We only trigger track-dragging if the user clicks on the track itself and nothing is currently being dragged.
    if (
      !props.isDisabled &&
      state.values.every((_, i) => !state.isThumbDragging(i))
    ) {
      let size = isVertical ? trackLayout.height : trackLayout.width;
      // Find the closest thumb
      const trackPosition = trackLayout[isVertical ? 'top' : 'left'];
      const clickPosition = isVertical ? clientY : clientX;
      console.log(
        trackPosition,
        trackLayout,
        clickPosition,
        'trackPosition, clickPosition',
        trackLayout
      );
      const offset = clickPosition - trackPosition;
      let percent = offset / size;
      if (reverseX) {
        if (!isVertical) {
          percent = 1 - percent;
        }
      } else {
        if (isVertical) {
          percent = 1 - percent;
        }
      }
      let value = state.getPercentValue(percent);

      // to find the closet thumb we split the array based on the first thumb position to the "right/end" of the click.
      let closestThumb;
      let split = state.values.findIndex((v) => value - v < 0);
      if (split === 0) {
        // If the index is zero then the closetThumb is the first one
        closestThumb = split;
      } else if (split === -1) {
        // If no index is found they've clicked past all the thumbs
        closestThumb = state.values.length - 1;
      } else {
        let lastLeft = state.values[split - 1];
        let firstRight = state.values[split];
        // Pick the last left/start thumb, unless they are stacked on top of each other, then pick the right/end one
        if (Math.abs(lastLeft - value) < Math.abs(firstRight - value)) {
          closestThumb = split - 1;
        } else {
          closestThumb = split;
        }
      }

      // Confirm that the found closest thumb is editable, not disabled, and move it
      if (closestThumb >= 0 && state.isThumbEditable(closestThumb)) {
        // Don't unfocus anything
        e.preventDefault();

        realTimeTrackDraggingIndex.current = closestThumb;
        state.setFocusedThumb(closestThumb);
        currentPointer.current = id;

        state.setThumbDragging(realTimeTrackDraggingIndex.current, true);
        state.setThumbValue(closestThumb, value);

        addGlobalListener(window, 'mouseup', onUpTrack, false);
        addGlobalListener(window, 'touchend', onUpTrack, false);
        addGlobalListener(window, 'pointerup', onUpTrack, false);
      } else {
        realTimeTrackDraggingIndex.current = null;
      }
    }
  };

  let onUpTrack = (e) => {
    let id = e.pointerId ?? e.changedTouches?.[0].identifier;
    if (id === currentPointer.current) {
      if (realTimeTrackDraggingIndex.current != null) {
        state.setThumbDragging(realTimeTrackDraggingIndex.current, false);
        realTimeTrackDraggingIndex.current = null;
      }

      removeGlobalListener(window, 'mouseup', onUpTrack, false);
      removeGlobalListener(window, 'touchend', onUpTrack, false);
      removeGlobalListener(window, 'pointerup', onUpTrack, false);
    }
  };

  if (labelProps.htmlFor) {
    // Ideally the `for` attribute should point to the first thumb, but VoiceOver on iOS
    // causes this to override the `aria-labelledby` on the thumb. This causes the first
    // thumb to only be announced as the slider label rather than its individual name as well.
    // See https://bugs.webkit.org/show_bug.cgi?id=172464.
    delete labelProps.htmlFor;
    labelProps.onClick = () => {
      // Safari does not focus <input type="range"> elements when clicking on an associated <label>,
      // so do it manually. In addition, make sure we show the focus ring.
      document.getElementById(getSliderThumbId(state, 0))?.focus();
      setInteractionModality('keyboard');
    };
  }

  return {
    labelProps,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: 'group',
      ...fieldProps,
    },
    trackProps: mergeProps(
      {
        onMouseDown(e: React.MouseEvent<HTMLElement>) {
          if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) {
            return;
          }
          onDownTrack(e, undefined, e.clientX, e.clientY);
        },
        onPointerDown(e: React.PointerEvent<HTMLElement>) {
          if (
            e.pointerType === 'mouse' &&
            (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey)
          ) {
            return;
          }
          onDownTrack(e, e.pointerId, e.clientX, e.clientY);
        },
        onTouchStart(e: React.TouchEvent<HTMLElement>) {
          onDownTrack(
            e,
            e.changedTouches[0].identifier,
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY
          );
        },
      },
      moveProps
    ),
    outputProps: {
      'htmlFor': state.values
        .map((_, index) => getSliderThumbId(state, index))
        .join(' '),
      'aria-live': 'off',
    },
  };
}

export const useSlider = (
  props: any,
  state: any,
  ref: any,
  isReversed?: boolean
) => {
  let { groupProps: webGroupProps, ...rest } = useSliderWeb(
    props,
    state,
    ref,
    isReversed
  );
  let groupProps = mapDomPropsToRN(webGroupProps);
  let labelProps = mapDomPropsToRN(rest.labelProps);
  return { groupProps, ...rest, labelProps };
};
