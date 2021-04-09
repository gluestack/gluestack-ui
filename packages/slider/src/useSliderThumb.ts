import { AriaSliderThumbProps } from '@react-types/slider';
import React, {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';
import { SliderState } from '@react-stately/slider';

interface SliderThumbAria {
  /** Props for the root thumb element; handles the dragging motion. */
  thumbProps: HTMLAttributes<HTMLElement>;

  /** Props for the visually hidden range input element. */
  inputProps: InputHTMLAttributes<HTMLInputElement>;

  /** Props for the label element for this thumb (optional). */
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
}

interface SliderThumbOptions extends AriaSliderThumbProps {
  /** A ref to the track element. */
  trackRef: RefObject<HTMLElement>;
  /** A ref to the thumb input element. */
  inputRef: RefObject<HTMLInputElement>;
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
  let {
    index,
    isRequired,
    isDisabled,
    validationState,
    trackRef,
    inputRef,
  } = opts;

  // We install mouse handlers for the drag motion on the thumb div, but
  // not the key handler for moving the thumb with the slider.  Instead,
  // we focus the range input, and let the browser handle the keyboard
  // interactions; we then listen to input's onChange to update state.
  return {
    inputProps: {},
    thumbProps: {},
    labelProps: {},
  };
}
