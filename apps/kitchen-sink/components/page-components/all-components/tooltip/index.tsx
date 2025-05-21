import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipText } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top",
      "top left",
      "top right",
      "bottom",
      "bottom left",
      "bottom right",
      "left",
      "left top",
      "left bottom",
      "right",
      "right top",
      "right bottom"
    ],
    "defaultValue": "top"
  }
}}>
      {props => {
  return (
    <Tooltip
      placement={props.placement}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
          </Button>
        )
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
    </Tooltip>
  )
}
    </ComponentPreviewer>
  );
}