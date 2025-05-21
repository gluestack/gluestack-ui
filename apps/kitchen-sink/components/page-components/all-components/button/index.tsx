import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline",
      "link"
    ],
    "defaultValue": "outline"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "primary",
      "secondary",
      "positive",
      "negative"
    ],
    "defaultValue": "primary"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  }
}}>
      {props => {
  return (
    <Button variant={props.variant} size={props.size} action={props.action}>
        <ButtonText>Button Text</ButtonText>
    </Button>
  )
}
    </ComponentPreviewer>
  );
}