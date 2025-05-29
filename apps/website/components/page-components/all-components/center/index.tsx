import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
    return (
      <Center className="bg-primary-500 h-[200px] w-[300px]">
        <Text className="text-typography-0 font-bold">This is the center.</Text>
      </Center>
    )
  }`}
      argTypes={{}}
      reactLive={{ Center, Text }}
      title={}
      description={}
    />
  );
}