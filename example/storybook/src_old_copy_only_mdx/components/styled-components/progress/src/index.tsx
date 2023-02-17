import Root from './styled-components/Root';
import FilledTrack from './styled-components/FilledTrack';
import { createProgress } from '@universa11y/progress';

export const Progress = createProgress({
  Root,
  FilledTrack,
});
