import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Pressable
      onPress={() => console.log("Hello")}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">Press me</Text>
    </Pressable>
  )
}`}
      argTypes={{}}
      reactLive={{ Pressable, Text }}
      title={}
      description={}
    />
  );
}