import { createProgress } from '@gluestack-ui/progress';
import { Root, FilledTrack } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleProgress = createProgress({
  Root,
  FilledTrack,
});

type IProgressProps = React.ComponentProps<typeof AccessibleProgress>;

export const Progress = forwardRef(
  ({ colorScheme = 'primary', ...props }: IProgressProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleProgress
        colorScheme={colorScheme}
        {...resolvedProps}
        ref={ref}
      >
        <AccessibleProgress.FilledTrack />
      </AccessibleProgress>
    );
  }
);
