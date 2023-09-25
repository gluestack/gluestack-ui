import { createProgress } from '@gluestack-ui/progress';
import { Root, FilledTrack } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType, IColorSchemes } from '../../types';

const AccessibleProgress = createProgress({
  Root,
  FilledTrack,
});

const ProgressTemp = forwardRef(
  ({ colorScheme = 'primary', ...props }: any, ref?: any) => {
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

export type IProgressComponentType<Progress> = GenericComponentType<
  Progress,
  { colorScheme: IColorSchemes }
>;

export const Progress = ProgressTemp as IProgressComponentType<
  typeof AccessibleProgress
>;
