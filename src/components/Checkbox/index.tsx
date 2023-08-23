import React from 'react';
import { Root, Indicator, Icon, Label, Group } from './styled-components';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { CheckIcon } from '../Icons';
import { usePropResolution } from '../../hooks/usePropResolution';

export const AccessibleCheckbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

export const Checkbox = ({ children, icon, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleCheckbox {...resolvedPropForGluestack}>
      <AccessibleCheckbox.Indicator mr="$2">
        {icon ? icon : <AccessibleCheckbox.Icon as={CheckIcon} />}
      </AccessibleCheckbox.Indicator>
      {children ? (
        <AccessibleCheckbox.Label>{children}</AccessibleCheckbox.Label>
      ) : (
        <></>
      )}
    </AccessibleCheckbox>
  );
};

Checkbox.Group = AccessibleCheckbox.Group;
