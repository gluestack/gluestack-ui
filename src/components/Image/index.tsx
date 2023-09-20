import React, { forwardRef } from 'react';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';

export const Image = forwardRef(
  ({ source, alt, ...props }: React.ComponentProps<typeof Root>, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return <Root {...resolvedProps} source={source} alt={alt} ref={ref} />;
  }
);
