import React, { forwardRef } from 'react';
import { createFab } from '@gluestack-ui/fab';
import { Root, Label, Icon } from './styled-components';
import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const AccessibleFab = createFab({ Root, Label, Icon });

type IFabProps = { label?: string; icon?: any };

const FabTemp = forwardRef(
  (
    { colorScheme = 'primary', variant = 'solid', icon, label, ...props }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleFab
        colorScheme={colorScheme}
        variant={variant}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {icon && <AccessibleFab.Icon as={icon} />}
        {label && <AccessibleFab.Label>{label}</AccessibleFab.Label>}
      </AccessibleFab>
    );
  }
);

export type IFabComponentType<Fab> = GenericComponentType<Fab, IFabProps>;

export const Fab = FabTemp as IFabComponentType<typeof AccessibleFab>;
