import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Badge } from '@/components/ui/badge';
import { BadgeText } from '@/components/ui/badge';
import { BadgeIcon } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Badge size="{{size}}" variant="{{variant}}" action="{{action}}">
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  )
}`}
      argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline"
    ],
    "defaultValue": "solid"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "error",
      "warning",
      "success",
      "info",
      "muted"
    ],
    "defaultValue": "muted"
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
    "defaultValue": "lg"
  }
}}
      reactLive={{ Badge, BadgeText, BadgeIcon, GlobeIcon }}
    />
  );
}