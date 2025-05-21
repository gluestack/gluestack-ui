import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Input } from '@/components/ui/input';
import { InputField } from '@/components/ui/input';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": true
  },
  "isInvalid": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isReadOnly": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "outline",
      "rounded",
      "underlined"
    ],
    "defaultValue": "outline"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "defaultValue": "md"
  }
}}>
      {props => {
  return (
    <Input variant={props.variant} size={props.size} isDisabled={props.isDisabled} isInvalid={props.isInvalid} isReadOnly={props.isReadOnly}>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
}
    </ComponentPreviewer>
  );
}