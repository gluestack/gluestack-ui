import React from 'react';
import { UIContext } from '../UIProvider';
import { useProgress } from './ProgressContext';

export const ProgressFilledTrack = () => {
  const { StyledProgressFilledTrack } = React.useContext(UIContext);
  const { valueWidth } = useProgress('ProgressContext');

  return (
    <StyledProgressFilledTrack
      sx={{
        style: {
          width: `${valueWidth}%`,
          bg: '$red.500',
          h: '100%',
        },
      }}
    />
  );
};
