import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Radio } from '@/components/ui/radio';
import { RadioGroup } from '@/components/ui/radio';
import { RadioIndicator } from '@/components/ui/radio';
import { RadioIcon } from '@/components/ui/radio';
import { RadioLabel } from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer props={{
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
  "isInvalid": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}>
      {props => {
  return (
    <RadioGroup>
      <Radio value={props.value} size={props.size} isInvalid={ {{isInvalid}} } isDisabled={ {{isDisabled}} }>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  )
}
    </ComponentPreviewer>
  );
}