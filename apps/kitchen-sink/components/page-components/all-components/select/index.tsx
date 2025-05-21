import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Select } from '@/components/ui/select';
import { SelectTrigger } from '@/components/ui/select';
import { SelectInput } from '@/components/ui/select';
import { SelectIcon } from '@/components/ui/select';
import { SelectPortal } from '@/components/ui/select';
import { SelectBackdrop } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { SelectDragIndicator } from '@/components/ui/select';
import { SelectDragIndicatorWrapper } from '@/components/ui/select';
import { SelectItem } from '@/components/ui/select';
import { ChevronDownIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "underlined",
      "outline",
      "rounded"
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
    <Select>
      <SelectTrigger variant={props.variant} size={props.size}>
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  )
}
    </ComponentPreviewer>
  );
}