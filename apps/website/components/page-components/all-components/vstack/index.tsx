import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Box className="justify-center h-60">
      <VStack space="{{space}}" reversed={ {{isReversed}} }>
        <Box className="h-16 w-16 bg-primary/30" />
        <Box className="h-16 w-16 bg-primary/60" />
        <Box className="h-16 w-16 bg-primary" />
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