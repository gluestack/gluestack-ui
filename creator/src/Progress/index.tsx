import { Progress as ProgressMain } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';

export const createProgress = ({
  StyledProgress,
  StyledProgressFilledTrack,
}: any) => {
  const ProgressTemp = ProgressMain(StyledProgress) as any;
  ProgressTemp.FilledTrack = ProgressFilledTrack(StyledProgressFilledTrack);

  const Progress = ProgressTemp as any;
  return Progress;
};
