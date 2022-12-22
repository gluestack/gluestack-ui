import SliderMain from './Slider';
import SliderThumb from './SliderThumb';
import SliderTrack from './SliderTrack';
import SliderFilledTrack from './SliderFilledTrack';
import type { ISliderComponentType } from './types';

export { SliderContext } from './Context';

export type { ISliderProps } from './types';

export const createSlider = ({
  StyledSlider,
  StyledSliderThumb,
  StyledSliderThumbInteraction,
  StyledSliderTrack,
  StyledSliderFilledTrack,
}: any) => {
  const Slider: any = SliderMain(StyledSlider);
  Slider.Thumb = SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction);
  Slider.Track = SliderTrack(StyledSliderTrack);
  Slider.FilledTrack = SliderFilledTrack(StyledSliderFilledTrack);

  Slider.displayName = 'Slider';
  Slider.Thumb.displayName = 'Slider.Thumb';
  Slider.Track.displayName = 'Slider.Track';
  Slider.FilledTrack.displayName = 'Slider.FilledTrack';

  return Slider;
};
