import { CodePreviewer } from '@/components/custom/code-previewer';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

<CodePreviewer
  code={`function Example() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Progress value={40} size="{{size}}" orientation="{{orientation}}">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  )
}`}
  argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    "defaultValue": "md"
  },
  "orientation": {
    "control": {
      "type": "select"
    },
    "options": [
      "horizontal",
      "vertical"
    ],
    "defaultValue": "horizontal"
  }
}}
  reactLive={{ Progress, ProgressFilledTrack, Center }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <VStack space="lg" className="max-w-80 w-full">
      <Text size="lg">Downloading 55%</Text>
      <Progress value={55} className="w-full h-1">
        <ProgressFilledTrack className="h-1" />
      </Progress>
    </VStack>
  );
}`}
  argTypes={{}}
  reactLive={{ Progress, ProgressFilledTrack, VStack, Text }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <VStack space="3xl" className="max-w-96 w-full">
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-emerald-600"/>
      </Progress>
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-amber-600"/>
      </Progress>
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-fuchsia-600"/>
      </Progress>
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-cyan-600"/>
      </Progress>
    </VStack>
  );
}`}
  argTypes={{}}
  reactLive={{ Progress, ProgressFilledTrack, VStack }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <VStack space="lg" className="max-w-[410px] w-full">
      <Heading>Internal Storage</Heading>
      <Progress value={46} className="w-full h-2 bg-lime-100">
        <ProgressFilledTrack className="h-2 bg-lime-500" />
      </Progress>
      <Text size="md">14GB</Text>
    </VStack>
  );
}`}
  argTypes={{}}
  reactLive={{ Progress, ProgressFilledTrack, VStack, Heading, Text }}
/>