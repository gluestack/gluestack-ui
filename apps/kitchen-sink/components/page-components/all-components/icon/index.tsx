import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Icon } from '@/components/ui/icon';
import { EditIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer props={{
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
}}>
      {props => {
  return (
     <Icon as={EditIcon} size={props.size} />
  )
}
    </ComponentPreviewer>
  );
}