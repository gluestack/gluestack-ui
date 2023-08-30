import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
// import type { InterfaceTooltipProps } from '@gluestack-ui/tooltip/lib/typescript/types';

import { styled } from '../styled';
import React, { cloneElement, forwardRef } from 'react';

export const AccessibleTooltip = createTooltip({
  Root,
  Content,
  Text,
  //@ts-ignore
  AnimatePresence: styled.Component,
});

type ParameterTypesOLD = Omit<
  Parameters<typeof AccessibleTooltip>[0],
  'trigger'
>;

type ParameterTypesNEW = ParameterTypesOLD & { label: string };

const TooltipNew = forwardRef(
  ({ children, label, ...props }: ParameterTypesNEW, ref?: any) => {
    return (
      <AccessibleTooltip
        {...props}
        ref={ref}
        trigger={(triggerProps: any) => {
          return cloneElement(children, { ...triggerProps });
        }}
      >
        <AccessibleTooltip.Content>
          <AccessibleTooltip.Text>{label}</AccessibleTooltip.Text>
        </AccessibleTooltip.Content>
      </AccessibleTooltip>
    );
  }
) as any;

export const Tooltip = TooltipNew as React.FC<ParameterTypesNEW>;
