import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { FormControl } from '@/components/ui/form-control'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button, ButtonText } from '@/components/ui/button'
import { EyeIcon, EyeOffIcon, SearchIcon } from '@/components/ui/icon'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Input variant="outline" size="md" isDisabled={ false } isInvalid={ false } isReadOnly={ false }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
};

const VariantRounded = () => {
return (
    <Input variant="rounded" size="md" isDisabled={ false } isInvalid={ false } isReadOnly={ false }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
};

const VariantUnderlined = () => {
return (
    <Input variant="underlined" size="md" isDisabled={ false } isInvalid={ false } isReadOnly={ false }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
};

const SizeSm = () => {
return (
    <Input variant="outline" size="sm" isDisabled={ false } isInvalid={ false } isReadOnly={ false }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
};

const SizeLg = () => {
return (
    <Input variant="outline" size="lg" isDisabled={ false } isInvalid={ false } isReadOnly={ false }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
};

const SizeXl = () => {
return (
    <Input variant="outline" size="xl" isDisabled={ false } isInvalid={ false } isReadOnly={ false }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
};

const ExampleInputWithFormControl = () => {
const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <FormControl  className="p-4 border border-outline-200 rounded-lg w-full">
      <VStack className="gap-4">
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
  )
};

const ExampleInputWithIcons = () => {
return (
    <Input>
      <InputSlot className="pl-3">
        <InputIcon as={SearchIcon}/>
      </InputSlot>
      <InputField
        placeholder="Search..."
      />
    </Input>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "rounded",
    label: "Rounded",
    content: <VariantRounded />,
  },
  {
    value: "underlined",
    label: "Underlined",
    content: <VariantUnderlined />,
  },
  {
    value: "sm",
    label: "Sm",
    content: <SizeSm />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "xl",
    label: "Xl",
    content: <SizeXl />,
  },
  {
    value: "input-with-formcontrol",
    label: "Input with FormControl",
    content: <ExampleInputWithFormControl />,
  },
  {
    value: "input-with-icons",
    label: "Input with Icons",
    content: <ExampleInputWithIcons />,
  }
];

export default function InputScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}