import { Progress as ProgressMain } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';

export const createProgress = ({
  StyledProgress,
  StyledProgressFilledTrack,
}: any) => {
  const Progress = ProgressMain(StyledProgress) as any;
  Progress.FilledTrack = ProgressFilledTrack(StyledProgressFilledTrack);

  Progress.displayName = 'Progress';
  Progress.FilledTrack.displayName = 'Progress.FilledTrack';

  return Progress;
};
