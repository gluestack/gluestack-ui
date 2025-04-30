"use client";
import { Text, View } from "react-native";
import { Button, ButtonText, ButtonSpinner } from "../components/Button";
import { CheckIcon, AlertCircleIcon } from "../components/Icon";
import { Input, InputField, InputIcon, InputSlot } from "../components/Input";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "../components/FormControl";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "../components/Checkbox";
import { useState } from "react";
export default function Home() {
  const [isInvalid, setIsInvalid] = useState(false)
  const [inputValue, setInputValue] = useState("12345")
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true)
    } else {
      setIsInvalid(false)
    }
  }
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
      <FormControl
        isInvalid={isInvalid}
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="lg">
          <InputField
            type="password"
            placeholder="password"
            value={inputValue}
            onChangeText={(text: string) => setInputValue(text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Atleast 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </View>
  );
}
