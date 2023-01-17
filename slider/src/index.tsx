import SliderMain from './Slider';
import SliderThumb from '../SliderThumb';
import SliderTrack from '../SliderTrack';
import SliderFilledTrack from '../SliderFilledTrack';
import type { ISliderComponentType } from './types';

export { SliderContext } from './Context';

export type { ISliderProps } from './types';

export function createSlider<
  StyledSlider,
  StyledSliderThumbInteraction,
  StyledSliderThumb,
  StyledSliderTrack,
  StyledSliderFilledTrack
>({
  StyledSlider,
  StyledSliderThumb,
  StyledSliderThumbInteraction,
  StyledSliderTrack,
  StyledSliderFilledTrack,
}: {
  StyledSlider: React.ComponentType<StyledSlider>;
  StyledSliderThumb: React.ComponentType<StyledSliderThumb>;
  StyledSliderThumbInteraction: React.ComponentType<StyledSliderThumbInteraction>;
  StyledSliderTrack: React.ComponentType<StyledSliderTrack>;
  StyledSliderFilledTrack: React.ComponentType<StyledSliderFilledTrack>;
}) {
  const Slider: any = SliderMain(StyledSlider);
  Slider.Thumb = SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction);
  Slider.Track = SliderTrack(StyledSliderTrack);
  Slider.FilledTrack = SliderFilledTrack(StyledSliderFilledTrack);

  Slider.displayName = 'Slider';
  Slider.Thumb.displayName = 'Slider.Thumb';
  Slider.Track.displayName = 'Slider.Track';
  Slider.FilledTrack.displayName = 'Slider.FilledTrack';

  return Slider as ISliderComponentType<
    StyledSlider,
    StyledSliderThumb,
    StyledSliderTrack,
    StyledSliderFilledTrack
  >;
}
