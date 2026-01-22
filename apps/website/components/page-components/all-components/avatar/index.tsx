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
          uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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