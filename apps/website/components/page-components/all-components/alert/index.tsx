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
    <Alert action="{{action}}" variant="{{variant}}">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  )
}`}
      argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline"
    ],
    "defaultValue": "outline"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "success",
      "info",
      "error",
      "warning",
      "muted"
    ],
    "defaultValue": "muted"
  }
}}
      reactLive={{ Alert, AlertText, AlertIcon, InfoIcon }}
    />
  );
}