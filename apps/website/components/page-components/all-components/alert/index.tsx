import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Alert } from '@/components/ui/alert';
import { AlertText } from '@/components/ui/alert';
import { AlertIcon } from '@/components/ui/alert';
import { InfoIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Alert variant="{{variant}}">
      <AlertIcon as={InfoIcon} />
      <AlertText>You can add components to your app using the cli.</AlertText>
    </Alert>
  )
}`}
      argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "default",
      "destructive"
    ],
    "defaultValue": "default"
  }
}}
      reactLive={{ Alert, AlertText, AlertIcon, InfoIcon }}
    />
  );
}