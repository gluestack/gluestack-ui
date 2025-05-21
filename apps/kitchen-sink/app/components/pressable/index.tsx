import { CodePreviewer } from '@/components/custom/code-previewer';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';

<CodePreviewer
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
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Pressable className="p-16 bg-primary-500">
      {({ pressed }) => (
        <Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>
          PRESSABLE
        </Text>
      )}
    </Pressable>
  );
}`}
  argTypes={{}}
  reactLive={{ Pressable, Text, Box, VStack }}
/>