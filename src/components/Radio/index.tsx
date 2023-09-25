import { forwardRef } from 'react';
import { Root, Group, Icon, Indicator, Label } from './styled-components';
import { createRadio } from '@gluestack-ui/radio';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';
import { CircleIcon } from '../Icons';
import { GenericComponentType, IColorSchemes } from '../../types';

const AccessibleRadio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});

const AccessibleRadioGroup = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    // const resolvedProps = usePropResolution(props);
    return <AccessibleRadio.Group children={children} {...props} ref={ref} />;
  }
) as any;

const RadioTemp = forwardRef(
  ({ colorScheme = 'primary', children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);

    return (
      <AccessibleRadio colorScheme={colorScheme} {...resolvedProps} ref={ref}>
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
  }
) as any;

RadioTemp.Group = AccessibleRadioGroup;

export type IRadioComponentType<Radio, Group> = GenericComponentType<
  Radio,
  { colorScheme: IColorSchemes }
> & {
  Group: GenericComponentType<Group>;
};

export const Radio = RadioTemp as IRadioComponentType<
  typeof AccessibleRadio,
  typeof AccessibleRadio.Group
>;
