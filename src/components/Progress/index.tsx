import { createProgress } from '@gluestack-ui/progress';
import { Root, FilledTrack } from './styled-components';
import React, { forwardRef } from 'react';

const AccessibleProgress = createProgress({
  Root,
  FilledTrack,
});

type IProgressProps = React.ComponentProps<typeof AccessibleProgress>;

export const Progress = forwardRef(
  ({ colorScheme = 'primary', ...props }: IProgressProps, ref?: any) => {
    return (
      <AccessibleProgress colorScheme={colorScheme} {...props} ref={ref}>
        <AccessibleProgress.FilledTrack />
      </AccessibleProgress>
    );
  }
);
