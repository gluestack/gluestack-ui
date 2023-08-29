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
// export const TooltipContent = Tooltip.Content;
// export const TooltipText = Tooltip.Text;

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
);

export const Tooltip = { ...AccessibleTooltip, ...TooltipNew };
