import { Progress } from './Progress';
import { ProgressFilledTrack } from './ProgressFilledTrack';

const ProgressTemp = Progress as any;
ProgressTemp.FilledTrack = ProgressFilledTrack;

export { ProgressTemp as Progress };
