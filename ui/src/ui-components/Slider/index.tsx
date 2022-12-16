import {
  StyledSlider,
  StyledSliderThumb,
  StyledSliderTrack,
  StyledSliderFilledTrack,
  StyledSliderThumbInteraction,
} from '../../styled-components';
import { createSlider } from '@gluestack/ui-creator';

export const Slider = createSlider({
  StyledSlider,
  StyledSliderThumb,
  StyledSliderTrack,
  StyledSliderFilledTrack,
  StyledSliderThumbInteraction,
}) as any;
