import { createSpinner } from '@gluestack-ui/spinner';
import { Root } from './styled-components';
import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleSpinner = createSpinner({ Root });

type Isize = React.ComponentProps<typeof AccessibleSpinner>['size'];

const SpinnerTemp = forwardRef(
  ({ size = 'small', ...props }: any, ref?: any) => {
    let sizeNew = size;
    if (size === 'sm') sizeNew = 'small';
    else if (size === 'lg') sizeNew = 'large';
    const resolvedProps = usePropResolution(props);
    return <AccessibleSpinner size={sizeNew} {...resolvedProps} ref={ref} />;
  }
);

export type ISpinnerComponentType<Spinner> = GenericComponentType<
  Spinner,
  { size?: 'sm' | 'lg' | Isize },
  { size: Isize }
>;

export const Spinner = SpinnerTemp as ISpinnerComponentType<
  typeof AccessibleSpinner
>;
