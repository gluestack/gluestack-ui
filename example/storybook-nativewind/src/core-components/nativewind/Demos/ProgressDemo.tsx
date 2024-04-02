import React from 'react';
import { Progress, ProgressFilledTrack } from '../';
const ProgressDemo = () => {
  return (
    <Progress value={40} className="w-[300px]">
      <ProgressFilledTrack />
    </Progress>
  );
};

export default ProgressDemo;
