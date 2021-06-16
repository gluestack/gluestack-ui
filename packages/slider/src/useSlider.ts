import { sliderIds } from './utils';
import { AriaSliderProps } from '@react-types/slider';
import React, { useRef } from 'react';
import { SliderState } from '@react-stately/slider';
import { useLabel } from '@react-aria/label';
import { isRTL } from '@react-native-aria/utils';

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

/**
 * Provides the behavior and accessibility implementation for a slider component representing one or more values.
 *
 * @param props Props for the slider.
 * @param state State for the slider, as returned by `useSliderState`.
 * @param trackRef Ref for the "track" element.  The width of this element provides the "length"
 * of the track -- the span of one dimensional space that the slider thumb can be.  It also
 * accepts click and drag motions, so that the closest thumb will follow clicks and drags on
 * the track.
 */
export function useSlider(
  props: AriaSliderProps,
  state: SliderState,
  trackLayout: any
): SliderAria {
  let { labelProps, fieldProps } = useLabel(props);

  let isVertical = props.orientation === 'vertical';

  sliderIds.set(state, labelProps.id ?? fieldProps.id);
  let currentPointer = useRef<number | null | undefined>(undefined);

  let onDownTrack = (
    e: React.UIEvent,
    id: number,
    clientX: number,
    clientY: number
  ) => {
    const direction = isRTL() ? 'rtl' : undefined;
    if (
      !props.isDisabled &&
      state.values.every((_, i) => !state.isThumbDragging(i))
    ) {
      let size = isVertical ? trackLayout.height : trackLayout.width;
      // Find the closest thumb
      const trackPosition = trackLayout[isVertical ? 'y' : 'x'];
      const clickPosition = isVertical ? clientY : clientX;
      const offset = clickPosition - trackPosition;
      let percent = offset / size;
      if (direction === 'rtl' || isVertical) {
        percent = 1 - percent;
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
        state.setFocusedThumb(closestThumb);
        currentPointer.current = id;
        state.setThumbDragging(closestThumb, true);
        state.setThumbValue(closestThumb, value);
        state.setThumbDragging(closestThumb, false);
      }
    }
  };

  return {
    labelProps,
    groupProps: {},
    trackProps: {
      onPress: (e: any) => {
        const { locationX, locationY } = e.nativeEvent;
        onDownTrack(e, undefined, locationX, locationY);
      },
    },
    outputProps: {},
  };
}
