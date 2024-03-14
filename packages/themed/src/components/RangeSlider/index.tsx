import { createRangeSlider } from '@gluestack-ui/range-slider';

import {
  Root,
  LeftThumb,
  RightThumb,
  Track,
  FilledTrack,
  ThumbInteraction,
} from './styled-components';

export const RangeSlider = createRangeSlider({
  Root,
  ThumbInteraction,
  LeftThumb,
  RightThumb,
  Track,
  FilledTrack,
});

export const RangeSliderLeftThumb = RangeSlider.LeftThumb;
export const RangeSliderRightThumb = RangeSlider.RightThumb;
export const RangeSliderTrack = RangeSlider.Track;
export const RangeSliderFilledTrack = RangeSlider.FilledTrack;
