import RangeSliderMain from './RangeSlider-aria';
import RangeSliderLeftThumb from './RangeSliderLeftThumb';
import RangeSliderRightThumb from './RangeSliderRightThumb';
import RangeSliderTrack from './RangeSliderTrack-aria';
import RangeSliderFilledTrack from './RangeSliderFilledTrack';
import type { IRangeSliderComponentType } from './types';

export { RangeSliderContext } from './Context';

export type { IRangeSliderProps } from './types';

export function createRangeSlider<
  RangeSliderProps,
  RangeSliderThumbInteractionProps,
  RangeSliderLeftThumbProps,
  RangeSliderRightThumbProps,
  RangeSliderTrackProps,
  RangeSliderFilledTrackProps
>({
  Root,
  ThumbInteraction,
  LeftThumb,
  RightThumb,
  Track,
  FilledTrack,
}: {
  Root: React.ComponentType<RangeSliderProps>;
  LeftThumb: React.ComponentType<RangeSliderLeftThumbProps>;
  RightThumb: React.ComponentType<RangeSliderRightThumbProps>;
  ThumbInteraction: React.ComponentType<RangeSliderThumbInteractionProps>;
  Track: React.ComponentType<RangeSliderTrackProps>;
  FilledTrack: React.ComponentType<RangeSliderFilledTrackProps>;
}) {
  const RangeSlider: any = RangeSliderMain(Root);
  RangeSlider.LeftThumb = RangeSliderLeftThumb(LeftThumb, ThumbInteraction);
  RangeSlider.RightThumb = RangeSliderRightThumb(RightThumb, ThumbInteraction);
  RangeSlider.Track = RangeSliderTrack(Track);
  RangeSlider.FilledTrack = RangeSliderFilledTrack(FilledTrack);

  RangeSlider.displayName = 'RangeSlider';
  RangeSlider.LeftThumb.displayName = 'RangeSlider.LeftThumb';
  RangeSlider.RightThumb.displayName = 'RangeSlider.RightThumb';
  RangeSlider.Track.displayName = 'RangeSlider.Track';
  RangeSlider.FilledTrack.displayName = 'RangeSlider.FilledTrack';

  return RangeSlider as IRangeSliderComponentType<
    RangeSliderProps,
    RangeSliderLeftThumbProps,
    RangeSliderRightThumbProps,
    RangeSliderTrackProps,
    RangeSliderFilledTrackProps
  >;
}
