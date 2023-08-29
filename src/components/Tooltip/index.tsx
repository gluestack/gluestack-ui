import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
import { styled } from '../styled';
import React, { cloneElement, forwardRef } from 'react';

export const AccessibleTooltip = createTooltip({
  Root,
  Content,
  Text,
  //@ts-ignore
  AnimatePresence: styled.Component,
});

const TooltipNew = forwardRef(
  ({ children, label, ...props }: any, ref?: any) => {
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

export const Tooltip = TooltipNew as typeof AccessibleTooltip;
