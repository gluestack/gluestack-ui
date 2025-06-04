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
    <Avatar size="{{size}}">
      <AvatarFallbackText>Jane Doe</AvatarFallbackText>
      <AvatarImage
        source=\\{{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <AvatarBadge />
    </Avatar>
  )
}`}
      argTypes={{
        size: {
          control: {
            type: 'select',
          },
          options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
          defaultValue: 'md',
        },
      }}
      reactLive={{ Avatar, AvatarFallbackText, AvatarImage, AvatarBadge }}
    />
  );
}
