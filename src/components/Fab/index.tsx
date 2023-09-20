import React, { forwardRef } from 'react';
import { createFab } from '@gluestack-ui/fab';
import { Root, Label, Icon } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleFab = createFab({ Root, Label, Icon });

type IFabProps = React.ComponentProps<typeof AccessibleFab>;
type IExtraProps = { label?: string; icon?: any };

export const Fab = forwardRef(
  (
    {
      colorScheme = 'primary',
      variant = 'solid',
      icon,
      label,
      ...props
    }: IFabProps & IExtraProps,
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
