"use client";
import { Text, View } from "react-native";
import { Button, ButtonText, ButtonSpinner } from "../components/Button";
import { CheckIcon } from "../components/Icon";
import { Input, InputField, InputIcon, InputSlot } from "../components/Input";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "../components/Checkbox";
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white w-full h-full">
      <Text className="text-red-500 text-2xl font-bold">Hello World</Text>
      <Button size="lg" variant="outline" className="bg-red-500">
        <ButtonText>Click me</ButtonText>
        <ButtonSpinner />
      </Button>
      <Checkbox size="sm" isInvalid={false} isDisabled={false}>
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
      <Input
        variant="outline"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here..." />
        <InputSlot>
          <InputIcon as={CheckIcon} />
        </InputSlot>
      </Input>
    </View>
  );
}
