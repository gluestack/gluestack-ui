import { createSlider } from '@gluestack-ui/slider';

import {
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
} from './styled-components';

export const Slider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
});
export const SliderThumb = Slider.Thumb;
export const SliderTrack = Slider.Track;
export const SliderFilledTrack = Slider.FilledTrack;
