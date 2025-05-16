import { CodePreviewer } from '@/components/code-previewer';
import { Icon } from '@/components/ui/icon';
import { EditIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <CodePreviewer
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
    "defaultValue": "md"
  }
}}
      reactLive={{ Icon, EditIcon }}
    />
  );
}