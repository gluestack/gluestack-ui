import { createSpinner } from '@gluestack-ui/spinner';
import { Root } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleSpinner = createSpinner({ Root });

type ISpinnerProps = React.ComponentProps<typeof AccessibleSpinner>;
type IRemovedProps = Omit<ISpinnerProps, 'size'>;
type Isize = ISpinnerProps['size'];

export const Spinner = forwardRef(
  (
    {
      size = 'small',
      ...props
    }: IRemovedProps & { size?: 'sm' | 'lg' | Isize },
    ref?: any
  ) => {
    let sizeNew = size;
    if (size === 'sm') sizeNew = 'small';
    else if (size === 'lg') sizeNew = 'large';
    const resolvedProps = usePropResolution(props);
    return <AccessibleSpinner size={sizeNew} {...resolvedProps} ref={ref} />;
  }
);
