import { CodePreviewer } from '@/components/custom/code-previewer';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { Button, ButtonText } from '@/components/ui/button';

<CodePreviewer
  code={`function Example() {
  return (
    <Tooltip
      placement="{{placement}}"
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
}`}
  argTypes={{
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
}}
  reactLive={{ Tooltip, TooltipContent, TooltipText, Button, ButtonText }}
/>