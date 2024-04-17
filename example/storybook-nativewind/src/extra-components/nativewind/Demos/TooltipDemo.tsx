import {
  Tooltip,
  TooltipContent,
  TooltipText,
  Button,
  ButtonText,
} from '../../../core-components/nativewind';
import React from 'react';

const TooltipDemo = () => {
  return (
    <Tooltip
      placement="top"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover </ButtonText>
          </Button>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipDemo;
