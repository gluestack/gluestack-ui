import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Box } from '@/components/ui/box';
import { Fab } from '@/components/ui/fab';
import { FabIcon } from '@/components/ui/fab';
import { FabLabel } from '@/components/ui/fab';
import { AddIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Box className="h-[230px] w-full max-w-96 bg-card border border-border rounded-md">
      <Fab
        size="{{size}}"
        placement="{{placement}}"
        isHovered={ {{isHovered}} }
        isDisabled={ {{isDisabled}} }
        isPressed={ {{isPressed}} }
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  )
}`}
      argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "sm"
  },
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top left",
      "top center",
      "top right",
      "bottom left",
      "bottom center",
      "bottom right"
    ],
    "defaultValue": "bottom right"
  },
  "isHovered": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isPressed": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}
      reactLive={{ Box, Fab, FabIcon, FabLabel, AddIcon }}
    />
  );
}