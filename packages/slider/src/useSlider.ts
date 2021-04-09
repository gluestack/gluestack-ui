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

import { AriaSliderProps } from '@react-types/slider';
import React, {
  HTMLAttributes,
  LabelHTMLAttributes,
  OutputHTMLAttributes,
  RefObject,
  useRef,
} from 'react';
import { SliderState } from '@react-stately/slider';
import { useLabel } from '@react-aria/label';

interface SliderAria {
  /** Props for the label element. */
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;

  /** Props for the root element of the slider component; groups slider inputs. */
  groupProps: HTMLAttributes<HTMLElement>;

  /** Props for the track element. */
  trackProps: HTMLAttributes<HTMLElement>;

  /** Props for the output element, displaying the value of the slider thumbs. */
  outputProps: OutputHTMLAttributes<HTMLOutputElement>;
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
  trackRef: RefObject<HTMLElement>
): SliderAria {
  let { labelProps, fieldProps } = useLabel(props);

  return {
    labelProps,
    groupProps: {},
    trackProps: {},
    outputProps: {},
  };
}
