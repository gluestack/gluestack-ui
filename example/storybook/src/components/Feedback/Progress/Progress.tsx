import React from 'react';

import { Progress, VStack, Text, Box, Heading } from '../../../ui-components';

const ProgressStory = ({ value = 50, ...props }: any) => {
  return (
    <Progress w={800} value={value} {...props}>
      <Progress.FilledTrack />
    </Progress>
  );
};

export default ProgressStory;

export { Progress, VStack, Text, Box, Heading };
