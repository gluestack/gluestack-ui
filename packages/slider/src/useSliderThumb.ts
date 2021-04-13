import { AriaSliderThumbProps } from '@react-types/slider';
import { clamp } from '@react-aria/utils';
import { getSliderThumbId, sliderIds } from './utils';
import { useRef } from 'react';
import { SliderState } from '@react-stately/slider';
import { useLabel } from '@react-aria/label';
import { useMove } from './useMove';
import { isRTL } from '@react-native-aria/utils';

interface SliderThumbAria {
  /** Props for the root thumb element; handles the dragging motion. */
  thumbProps: any;

  /** Props for the visually hidden range input element. */
  inputProps: any;

  /** Props for the label element for this thumb (optional). */
  labelProps: any;
}

interface SliderThumbOptions extends AriaSliderThumbProps {
  /** A ref to the track element. */
  trackLayout: any;
  /** A ref to the thumb input element. */
  inputRef: any;
}

/**
 * Provides behavior and accessibility for a thumb of a slider component.
 *
 * @param opts Options for this Slider thumb.
 * @param state Slider state, created via `useSliderState`.
 */
export function useSliderThumb(
  opts: SliderThumbOptions,
  state: SliderState
): SliderThumbAria {
  let { index, isDisabled, trackLayout } = opts;

  let isVertical = opts.orientation === 'vertical';
  const direction = isRTL() ? 'rtl' : undefined;

  let labelId = sliderIds.get(state);
  const { labelProps, fieldProps } = useLabel({
    ...opts,
    'id': getSliderThumbId(state, index),
    'aria-labelledby': `${labelId} ${opts['aria-labelledby'] ?? ''}`.trim(),
  });

  const stateRef = useRef<SliderState>(null);
  stateRef.current = state;
  let reverseX = direction === 'rtl';
  let currentPosition = useRef<number>(null);
  let { moveProps } = useMove({
    onMoveStart() {
      currentPosition.current = null;
      state.setThumbDragging(index, true);
    },
    onMove({ deltaX, deltaY }) {
      let size = isVertical ? trackLayout.height : trackLayout.width;

      if (currentPosition.current == null) {
        currentPosition.current =
          stateRef.current.getThumbPercent(index) * size;
      }

      let delta = isVertical ? deltaY : deltaX;
      if (isVertical || reverseX) {
        delta = -delta;
      }
      currentPosition.current += delta;
      stateRef.current.setThumbPercent(
        index,
        clamp(currentPosition.current / size, 0, 1)
      );
    },
    onMoveEnd() {
      state.setThumbDragging(index, false);
    },
  });

  state.setThumbEditable(index, !isDisabled);

  const onAccessibilityAction = (event: any) => {
    const max = state.getThumbMinValue(index);
    const min = state.getThumbMaxValue(index);
    const value = state.getThumbValue(index);

    const incrementValue = Math.min(value + state.step ?? 1, max);
    const decrementValue = Math.max(value - state.step ?? 1, min);

    switch (event.nativeEvent.actionName) {
      case 'increment':
        state.setThumbValue(index, incrementValue);
        break;
      case 'decrement':
        state.setThumbValue(index, decrementValue);
        break;
      default:
        break;
    }
  };

  return {
    inputProps: {
      ...fieldProps,
      disabled: isDisabled,
      accessibilityRole: 'adjustable',
      accessibilityValue: {
        min: state.getThumbMinValue(index),
        max: state.getThumbMaxValue(index),
        now: state.getThumbValue(index),
      },
      accessibilityActions: [
        {
          name: 'increment',
          label: 'Increment',
        },
        {
          name: 'decrement',
          label: 'Decrement',
        },
      ],
      onAccessibilityAction,
    },
    thumbProps: !isDisabled ? moveProps : {},
    labelProps,
  };
}
