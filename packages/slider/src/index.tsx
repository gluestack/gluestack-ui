import SliderMain from './Slider';
import SliderThumb from './SliderThumb';
import SliderTrack from './SliderTrack';
import SliderFilledTrack from './SliderFilledTrack';
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
  Root,
  ThumbInteraction,
  Thumb,
  Track,
  FilledTrack,
}: {
  Root: React.ComponentType<StyledSlider>;
  Thumb: React.ComponentType<StyledSliderThumb>;
  ThumbInteraction: React.ComponentType<StyledSliderThumbInteraction>;
  Track: React.ComponentType<StyledSliderTrack>;
  FilledTrack: React.ComponentType<StyledSliderFilledTrack>;
}) {
  const Slider: any = SliderMain(Root);
  Slider.Thumb = SliderThumb(Thumb, ThumbInteraction);
  Slider.Track = SliderTrack(Track);
  Slider.FilledTrack = SliderFilledTrack(FilledTrack);

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
