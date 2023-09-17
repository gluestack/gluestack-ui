import { createTextarea } from '@gluestack-ui/textarea';
import { Root, Input } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleTextarea = createTextarea({
  Root,
  Input,
});

export const Textarea = forwardRef(
  (
    {
      placeholder,
      ...props
    }: React.ComponentProps<typeof AccessibleTextarea> & {
      placeholder: string;
    },
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleTextarea {...resolvedProps} ref={ref}>
        <AccessibleTextarea.Input placeholder={placeholder} />
      </AccessibleTextarea>
    );
  }
);
