import { Progress as ProgressMain } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';
import type { IProgressComponentType } from './types';

export function createProgress<StyledProgress, StyledProgressFilledTrack>({
  StyledProgress,
  StyledProgressFilledTrack,
}: {
  StyledProgress: React.ComponentType<StyledProgress>;
  StyledProgressFilledTrack: React.ComponentType<StyledProgressFilledTrack>;
}) {
  const Progress = ProgressMain(StyledProgress) as any;
  Progress.FilledTrack = ProgressFilledTrack(StyledProgressFilledTrack);

  Progress.displayName = 'Progress';
  Progress.FilledTrack.displayName = 'Progress.FilledTrack';

  return Progress as IProgressComponentType<
    StyledProgress,
    StyledProgressFilledTrack
  >;
}
