import { Root, FilledTrack } from './styled-component';
import { createProgress } from '@universa11y/progress';
import React from 'react';
import { Wrapper } from '../Wrapper';

export const ProgressTemp: any = createProgress({
  Root,
  FilledTrack,
});

export const Progress = () => {
  return (
    <Wrapper>
      <ProgressTemp value={50}>
        <ProgressTemp.FilledTrack />
      </ProgressTemp>
    </Wrapper>
  );
};

export default Progress;

export { View } from 'react-native';
