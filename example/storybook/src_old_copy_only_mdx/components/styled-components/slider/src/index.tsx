import Root from './styled-components/Root';
import Thumb from './styled-components/Thumb';
import Track from './styled-components/Track';
import FilledTrack from './styled-components/FilledTrack';
import ThumbInteraction from './styled-components/ThumbInteraction';
import { createSlider } from '@universa11y/slider';

//@ts-ignore
export const Slider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
}) as any;
