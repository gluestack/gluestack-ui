// SpinnerAndProgressGrid.tsx

import React from 'react';
import { Progress, ProgressFilledTrack } from '../components/ui/progress';
import { Spinner } from '../components/ui/spinner';
import colors from 'tailwindcss/colors';

const SpinnerAndProgressGrid = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col justify-center gap-2 w-1/5">
        <Spinner />
        <Spinner color={colors.emerald[600]} />
        <Spinner color={colors.amber[600]} />
        <Spinner color={colors.fuchsia[600]} />
      </div>

      <div className="flex flex-col gap-4 w-full ">
        <Progress value={26} className=" h-4" size="sm">
          <ProgressFilledTrack className="bg-success-600" />
        </Progress>
        <Progress value={46} className=" h-4" size="sm">
          <ProgressFilledTrack className="bg-warning-600" />
        </Progress>
        <Progress value={66} className="h-4" size="sm">
          <ProgressFilledTrack className="bg-info-400" />
        </Progress>
        <Progress value={86} className="h-4" size="lg">
          <ProgressFilledTrack className="bg-error-600" />
        </Progress>
      </div>
    </div>
  );
};

export default SpinnerAndProgressGrid;
