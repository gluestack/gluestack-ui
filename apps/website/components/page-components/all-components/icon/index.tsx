import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Icon } from '@/components/ui/icon';
import { EditIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
     <Icon as={EditIcon} size="{{size}}" />
  )
}`}
      argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "defaultValue": "lg"
  }
}}
      reactLive={{ Icon, EditIcon }}
      
    />
  );
}