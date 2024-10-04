import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipText,
  Button,
  ButtonText,
} from '../../../core-components/nativewind';

const TooltipDemo = () => {
  return (
    <Tooltip
      placement="top"
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
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
