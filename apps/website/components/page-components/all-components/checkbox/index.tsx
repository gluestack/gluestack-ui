import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxIndicator } from '@/components/ui/checkbox';
import { CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { CheckboxIcon } from '@/components/ui/checkbox';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Checkbox isDisabled={ {{isDisabled}} } isInvalid={ {{isInvalid}} }>
        <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
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
  }
}}
      reactLive={{ Checkbox, CheckboxIndicator, CheckboxLabel, CheckIcon, CheckboxIcon }}
    />
  );
}