import { CodePreviewer } from '@/components/custom/code-previewer';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
    return (
      <Center className="bg-primary-500 h-[200px] w-[300px]">
        <Text className="text-typography-0 font-bold">This is the center.</Text>
      </Center>
    )
  }`}
  argTypes={{}}
  reactLive={{ Center, Text }}
/>
    </div>
  );
}