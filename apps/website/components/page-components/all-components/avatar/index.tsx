import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallbackText } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { AvatarBadge } from '@/components/ui/avatar';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Avatar>
      <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
      <AvatarImage
        source=\\{{
          uri: "https://github.com/shadcn.png",
        }}
      />
    </Avatar>
  )
}`}
      argTypes={{}}
      reactLive={{ Avatar, AvatarFallbackText, AvatarImage, AvatarBadge }}
    />
  );
}