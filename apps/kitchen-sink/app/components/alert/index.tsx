import { CodePreviewer } from '@/components/custom/code-previewer';
import { Alert, AlertText, AlertIcon } from '@/components/ui/alert';
import { InfoIcon, Icon, CloseIcon, EyeIcon, EyeOffIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { CloudIcon, Bomb } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
  return (
    <Alert action="{{ action }}" variant="{{ variant }}">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  )
}`}
  argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline"
    ],
    "defaultValue": "outline"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "success",
      "info",
      "error",
      "warning",
      "muted"
    ],
    "defaultValue": "muted"
  }
}}
  reactLive={{ Alert, AlertText, AlertIcon, InfoIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Alert
      action="success"
      className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center"
    >
      <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
        <AlertText className="font-semibold text-typography-900" size="sm">
          Verify your phone number to create an API key
        </AlertText>
        <Button size="sm" className="hidden sm:flex">
          <ButtonText>Start verification</ButtonText>
        </Button>
      </VStack>
      <Icon as={CloseIcon} />
    </Alert>
  );
}`}
  argTypes={{}}
  reactLive={{ Alert, AlertText, VStack, Icon, CloseIcon, Button, ButtonText }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Alert
      action="warning"
      className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center"
    >
      <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
        <AlertText className="font-semibold text-typography-900" size="sm">
          Your data has been synced to the cloud
        </AlertText>
        <Button size="sm" className="hidden sm:flex">
          <ButtonText>View details</ButtonText>
        </Button>
      </VStack>
      <Icon as={CloseIcon} />
    </Alert>
  );
}`}
  argTypes={{}}
  reactLive={{ Alert, AlertText, AlertIcon, VStack, Icon, CloseIcon, Button, ButtonText, CloudIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Alert action="error" className="gap-3">
      <AlertIcon as={Bomb} size="lg" />
      <AlertText className="text-typography-900" size="sm">
        <Text className="mr-2 font-semibold text-typography-900">
          Heads up:
        </Text>
        Once done, this action cannot be undone
      </AlertText>
    </Alert>
  );
}`}
  argTypes={{}}
  reactLive={{ Alert, AlertText, AlertIcon, Text, Bomb }}
/>

<CodePreviewer
  code={`function Example() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <VStack className="gap-5 sm:gap-8 p-6 sm:p-9 border border-outline-200 bg-background-0 rounded-xl shadow-hard-5 w-full max-w-[423px]">
      <VStack className="items-center gap-1">
        <Heading size="xl">Confirm our password?</Heading>
        <Text>johnsmith@gmail.com</Text>
      </VStack>
      <VStack className="gap-3 sm:gap-5">
        <Input className="rounded-md" size="sm">
          <InputField
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputSlot className="mr-3" onPress={handleState}>
            <InputIcon
              size="xs"
              as={showPassword ? EyeIcon : EyeOffIcon}
              className="stroke-background-600"
            />
          </InputSlot>
        </Input>
        <Button className="w-full rounded-md" size="sm">
          <ButtonText>Confirm</ButtonText>
        </Button>
      </VStack>
      <Alert className="items-start" action="info">
        <AlertIcon as={InfoIcon} size="xs" className="stroke-background-500" />
        <AlertText className="text-typography-600" size="xs">
          Minimum 8 characters, with at least 1 uppercase, 1 lowercase, and 1
          number required.
        </AlertText>
      </Alert>
    </VStack>
  );
}`}
  argTypes={{}}
  reactLive={{ Alert, AlertText, AlertIcon, VStack, Button, ButtonText, Heading, Input, InputField, InputIcon, InputSlot, Text, EyeIcon, EyeOffIcon, InfoIcon }}
/>
    </div>
  );
}