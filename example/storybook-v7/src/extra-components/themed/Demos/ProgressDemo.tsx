import React from 'react';
import { Progress, ProgressFilledTrack } from '../../../core-components/themed';
const ProgressDemo = () => {
  return (
    <Progress value={46} size="sm">
      <ProgressFilledTrack bg="$amber600" />
    </Progress>
  );
};

export default ProgressDemo;
