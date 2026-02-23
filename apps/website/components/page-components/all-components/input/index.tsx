import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Input } from '@/components/ui/input';
import { InputField } from '@/components/ui/input';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Input variant="{{variant}}" size="{{size}}" isDisabled={ {{isDisabled}} } isInvalid={ {{isInvalid}} } isReadOnly={ {{isReadOnly}} }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
}`}
      argTypes={{
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
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
  }
}}
      reactLive={{ Input, InputField }}
      
    />
  );
}