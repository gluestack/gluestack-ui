import React from 'react';
import { Progress, ProgressFilledTrack } from '../';
const ProgressDemo = () => {
  return (
    <Progress value={46} size="sm">
      <ProgressFilledTrack bg="$amber600" />
    </Progress>
  );
};

export default ProgressDemo;
