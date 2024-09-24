import React from 'react';
import {
  Progress,
  ProgressFilledTrack,
} from '../../../core-components/nativewind';

const ProgressDemo = () => {
  return (
    <Progress value={40} className="w-[220px]">
      <ProgressFilledTrack />
    </Progress>
  );
};

export default ProgressDemo;
