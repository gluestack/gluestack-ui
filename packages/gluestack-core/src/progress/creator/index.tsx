import { Progress as ProgressMain } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';
import type { IProgressComponentType } from './types';

export function createProgress<ProgressProps, ProgressFilledTrackProps>({
  Root,
  FilledTrack,
}: {
  Root: React.ComponentType<ProgressProps>;
  FilledTrack: React.ComponentType<ProgressFilledTrackProps>;
}) {
  const Progress = ProgressMain(Root) as any;
  Progress.FilledTrack = ProgressFilledTrack(FilledTrack);

  Progress.displayName = 'Progress';
  Progress.FilledTrack.displayName = 'Progress.FilledTrack';

  return Progress as IProgressComponentType<
    ProgressProps,
    ProgressFilledTrackProps
  >;
}
