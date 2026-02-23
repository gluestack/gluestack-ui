import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Switch } from '@/components/ui/switch';
import { Center } from '@/components/ui/center';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Center>
    <Switch
      size="{{size}}"
      isDisabled={ {{isDisabled}} }
      trackColor={ {false: "#d4d4d4", true: "#525252"} }
      thumbColor="#fafafa"
      activeThumbColor="#fafafa"
      ios_backgroundColor="#d4d4d4"
    />
    </Center>
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
    "defaultValue": "md"
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}
      reactLive={{ Switch, Center }}
      
    />
  );
}