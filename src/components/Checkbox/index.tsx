import React, { forwardRef } from 'react';
import { Root, Indicator, Icon, Label, Group } from './styled-components';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { CheckIcon } from '../Icons';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleCheckbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

export const Checkbox = forwardRef(
  ({ colorScheme = 'primary', children, icon, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleCheckbox
        colorScheme={colorScheme}
        {...resolvedProps}
        ref={ref}
      >
        <AccessibleCheckbox.Indicator>
          {icon ? (
            <AccessibleCheckbox.Icon as={icon} />
          ) : (
            <AccessibleCheckbox.Icon as={CheckIcon} />
          )}
        </AccessibleCheckbox.Indicator>
        {children ? (
          <AccessibleCheckbox.Label>{children}</AccessibleCheckbox.Label>
        ) : (
          <></>
        )}
      </AccessibleCheckbox>
    );
  }
) as any;

Checkbox.Group = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return (
    <AccessibleCheckbox.Group
      children={children}
      {...resolvedProps}
      ref={ref}
    />
  );
});
