import Root from './Root';
import Thumb from './Thumb';
import Track from './Track';
import FilledTrack from './FilledTrack';
import ThumbInteraction from './ThumbInteraction';
import { createSlider } from '@universa11y/slider';

//@ts-ignore
export const Slider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
}) as any;
