import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Box className="justify-center h-80">
      <VStack space="{{space}}" reversed={ {{isReversed}} }>
        <Box className="h-20 w-20 bg-primary-300" />
        <Box className="h-20 w-20 bg-primary-400" />
        <Box className="h-20 w-20 bg-primary-500" />
      </VStack>
    </Box>
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
      reactLive={{ VStack, Box }}
    />
  );
}