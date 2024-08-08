import React from 'react';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { Button, ButtonText } from '@/components/ui/button';
import { Edit, Command } from 'lucide-react-native';

const TooltipBasic = ({
  showTooltip: showTooltipProp = true,
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
  return (
    <Tooltip
      offset={10}
      placement={placement}
      isOpen={showTooltipProp}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps: any) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>More</ButtonText>
          </Button>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>{text}</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

TooltipBasic.description =
  'This is a basic Tooltip component example.  A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.';

export default TooltipBasic;

export {
  TooltipBasic,
  Tooltip,
  TooltipContent,
  TooltipText,
  Button,
  ButtonText,
  Edit,
  Command,
};
