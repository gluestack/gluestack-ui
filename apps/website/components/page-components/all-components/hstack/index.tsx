import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <HStack space="{{space}}" reversed={ {{isReversed}} }>
      <Box className="h-16 w-16 bg-primary-300" />
      <Box className="h-16 w-16 bg-primary-400" />
      <Box className="h-16 w-16 bg-primary-500" />
    </HStack>
  )
}`}
      argTypes={{
  "space": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl"
    ],
    "defaultValue": "md"
  },
  "isReversed": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}
      reactLive={{ HStack, Box }}
    />
  );
}