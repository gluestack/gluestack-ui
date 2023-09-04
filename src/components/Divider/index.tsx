import React, { forwardRef } from 'react';
import Root from './styled-components/Root';
import { createDivider } from '@gluestack-ui/divider';
const AccessibleDivider = createDivider({ Root });

import type { GSConfig } from '@gluestack-style/react';
//TODO: not exposed now, will need to export it and release a new version of @gluestack-style/react.

type IDividerProps = React.ComponentProps<typeof AccessibleDivider>;

export const Divider = forwardRef(
  (
    {
      thickness,
      orientation,
      ...props
    }: IDividerProps & { thickness?: number | GSConfig['tokens']['space'] },
    ref?: any
  ) => {
    let thicknessProp = {};
    if (thickness) {
      if (orientation === 'vertical') thicknessProp = { w: thickness };
      else thicknessProp = { h: thickness };
    }
    return (
      <AccessibleDivider
        {...thicknessProp}
        orientation={orientation ? orientation : 'horizontal'}
        {...props}
        ref={ref}
      />
    );
  }
);
