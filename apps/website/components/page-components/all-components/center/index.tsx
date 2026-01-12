import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
    return (
      <Center className="bg-primary/80 h-[150px] w-[250px]">
        <Text className="text-primary-foreground font-bold">This is the center.</Text>
      </Center>
    )
  }`}
      argTypes={{}}
      reactLive={{ Center, Text }}
    />
  );
}