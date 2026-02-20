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
    <Badge variant="{{variant}}">
      <BadgeText>New</BadgeText>
    </Badge>
  )
}`}
      argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "default",
      "secondary",
      "destructive",
      "outline"
    ],
    "defaultValue": "default"
  }
}}
      reactLive={{ Badge, BadgeText, BadgeIcon, GlobeIcon }}
      
    />
  );
}