import { Progress as ProgressMain } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';
import type { IProgressComponentType } from './types';

export function createProgress<StyledProgress, StyledProgressFilledTrack>({
  Root,
  FilledTrack,
}: {
  Root: React.ComponentType<StyledProgress>;
  FilledTrack: React.ComponentType<StyledProgressFilledTrack>;
}) {
  const Progress = ProgressMain(Root) as any;
  Progress.FilledTrack = ProgressFilledTrack(FilledTrack);

  Progress.displayName = 'Progress';
  Progress.FilledTrack.displayName = 'Progress.FilledTrack';

  return Progress as IProgressComponentType<
    StyledProgress,
    StyledProgressFilledTrack
  >;
}
