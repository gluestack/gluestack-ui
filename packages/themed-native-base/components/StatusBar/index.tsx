import React, { forwardRef } from 'react';

import { Root as AccessibleStatusBar } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const StatusBarTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleStatusBar {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleStatusBar>
  );
});

const StatusBarNew = StatusBarTemp as any;

export type IStatusBarComponentType<StatusBar> =
  GenericComponentType<StatusBar>;

export const StatusBar = StatusBarNew as IStatusBarComponentType<
  typeof AccessibleStatusBar
>;
