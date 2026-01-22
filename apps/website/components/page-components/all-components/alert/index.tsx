import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Alert } from '@/components/ui/alert';
import { AlertText } from '@/components/ui/alert';
import { AlertIcon } from '@/components/ui/alert';
import { InfoIcon } from '@/components/ui/icon';
import { Center } from '@/components/ui/center';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    
    <Alert variant="{{variant}}" >
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
      "default",
      "destructive"
    ],
    "defaultValue": "default"
  }
}}
      reactLive={{ Alert, AlertText, AlertIcon, InfoIcon, Center }}
    />
  );
}