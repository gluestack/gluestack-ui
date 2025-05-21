import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxIndicator } from '@/components/ui/checkbox';
import { CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { CheckboxIcon } from '@/components/ui/checkbox';

export default function Example() {
  return (
    <ComponentPreviewer props={{
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
  }
}}>
      {props => {
  return (
    <Checkbox isDisabled={props.isDisabled} isInvalid={props.isInvalid} size={props.size}>
        <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  )
}
    </ComponentPreviewer>
  );
}