import React, { forwardRef } from 'react';
import Root from './styled-components/Root';
import { createDivider } from '@gluestack-ui/divider';
const AccessibleDivider = createDivider({ Root });

import type { GSConfig } from '@gluestack-style/react';
import { GenericComponentType } from '../../types';
import { usePropResolution } from '../../hooks/usePropResolution';
//TODO: not exposed now, will need to export it and release a new version of @gluestack-style/react.

type IDividerProps = { thickness?: number | GSConfig['tokens']['space'] };

const DividerTemp = forwardRef(
  ({ thickness, orientation, ...props }: any, ref?: any) => {
    let thicknessProp = {};
    if (thickness) {
      if (orientation === 'vertical') thicknessProp = { w: thickness };
      else thicknessProp = { h: thickness };
    }
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleDivider
        {...resolvedProps}
        orientation={orientation ? orientation : 'horizontal'}
        {...thicknessProp}
        ref={ref}
      />
    );
  }
);

export type IDividerComponentType<Divider> = GenericComponentType<
  Divider,
  IDividerProps
>;

export const Divider = DividerTemp as IDividerComponentType<
  typeof AccessibleDivider
>;
