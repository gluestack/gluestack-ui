import React from 'react';
import Wrapper from '../Wrapper';

import { createProgress } from '@gluestack-ui/progress';
import { Root, FilledTrack } from '../styled-components/progress';
import { Center } from '../Center/Center';

export const Progress = createProgress({
  Root,
  FilledTrack,
});

export const ProgressBasicStory = ({ value = 50, ...props }: any) => {
  return (
    <Wrapper>
      <Center w="100%" h="100%" alignItems="center" justifyContent="center">
        <Progress w="70%" value={value} {...props}>
          <Progress.FilledTrack />
        </Progress>
      </Center>
    </Wrapper>
  );
};
