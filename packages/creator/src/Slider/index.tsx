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
  const SliderTemp: any = SliderMain(StyledSlider);
  SliderTemp.Thumb = SliderThumb(
    StyledSliderThumb,
    StyledSliderThumbInteraction
  );
  SliderTemp.Track = SliderTrack(StyledSliderTrack);
  SliderTemp.FilledTrack = SliderFilledTrack(StyledSliderFilledTrack);
  const Slider = SliderTemp as ISliderComponentType;
  return Slider;
};
