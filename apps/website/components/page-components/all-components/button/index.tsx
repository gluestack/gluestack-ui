import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Button variant="{{variant}}" size="{{size}}">
        <ButtonText>Click me</ButtonText>
    </Button>
  )
}`}
      argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link"
    ],
    "defaultValue": "default"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "default",
      "sm",
      "lg"
    ],
    "defaultValue": "default"
  }
}}
      reactLive={{ Button, ButtonText }}
    />
  );
}