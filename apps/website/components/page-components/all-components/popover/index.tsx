import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Popover } from '@/components/ui/popover';
import { PopoverBackdrop } from '@/components/ui/popover';
import { PopoverArrow } from '@/components/ui/popover';
import { PopoverBody } from '@/components/ui/popover';
import { PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="{{placement}}"
      size="{{size}}"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Open Popover</ButtonText>
          </Button>
        )
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text className="text-typography-900">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}`}
      argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "full"
    ],
    "defaultValue": "md"
  },
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top",
      "bottom",
      "left",
      "right",
      "bottom left",
      "bottom right",
      "top left",
      "top right",
      "left bottom",
      "left right",
      "right bottom",
      "right top"
    ],
    "defaultValue": "bottom"
  }
}}
      reactLive={{ Popover, PopoverBackdrop, PopoverArrow, PopoverBody, PopoverContent, Button, ButtonText, Text }}
      title={}
      description={}
    />
  );
}