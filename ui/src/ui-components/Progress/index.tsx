import {
  StyledProgress,
  StyledProgressFilledTrack,
} from '../../styled-components';
import { createProgress } from '@gluestack/ui-creator';

export const Progress = createProgress({
  StyledProgress,
  StyledProgressFilledTrack,
}) as any;
