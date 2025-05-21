import { CodePreviewer } from '@/components/custom/code-previewer';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { FormControl } from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon, SearchIcon } from '@/components/ui/icon';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
  return (
    <Input variant="{{variant}}" size="{{size}}" isDisabled={ {{isDisabled}} } isInvalid={ {{isInvalid}} } isReadOnly={ {{isReadOnly}} }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
}`}
  argTypes={{
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": true
  },
  "isInvalid": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isReadOnly": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "outline",
      "rounded",
      "underlined"
    ],
    "defaultValue": "outline"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "defaultValue": "md"
  }
}}
  reactLive={{ Input, InputField }}
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
    <FormControl  className="p-4 border border-outline-200 rounded-lg ">
      <VStack className="space-y-4">
        <Heading className="text-typography-900">
          Login
        </Heading>
        <VStack space="xs">
          <Text className="text-typography-500">
            Email
          </Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500">
            Password
          </Text>
          <Input textAlign="center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon}/>
            </InputSlot>
          </Input>
        </VStack>
        <Button className="ml-auto">
          <ButtonText>Save</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}`}
  argTypes={{}}
  reactLive={{ Input, InputField, InputIcon, InputSlot, FormControl, VStack, Heading, Text, Button, ButtonText, EyeIcon, EyeOffIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Input>
      <InputSlot className="pl-3">
        <InputIcon as={SearchIcon}/>
      </InputSlot>
      <InputField
        placeholder="Search..."
      />
    </Input>
  );
}`}
  argTypes={{}}
  reactLive={{ Input, InputField, InputIcon, InputSlot, SearchIcon }}
/>
    </div>
  );
}