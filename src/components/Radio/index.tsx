import { forwardRef } from 'react';
import { Root, Group, Icon, Indicator, Label } from './styled-components';
import { createRadio } from '@gluestack-ui/radio';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';
import { CircleIcon } from '../Icons';

const AccessibleRadio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});

export const AccessibleRadioGroup = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleRadio.Group children={children} {...resolvedProps} ref={ref} />
    );
  }
);

// const AccessibleRadioIcon = AccessibleRadio.Icon;
// const AccessibleRadioIndicator = AccessibleRadio.Indicator;
// const AccessibleRadioLabel = AccessibleRadio.Label;

export const Radio = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return (
    <AccessibleRadio {...resolvedProps} ref={ref}>
      {typeof children === 'string' && (
        <>
          <AccessibleRadio.Indicator>
            <AccessibleRadio.Icon as={CircleIcon} />
          </AccessibleRadio.Indicator>
          <AccessibleRadio.Label>Label 1</AccessibleRadio.Label>
        </>
      )}
    </AccessibleRadio>
  );
}) as any;

Radio.Group = AccessibleRadioGroup;
