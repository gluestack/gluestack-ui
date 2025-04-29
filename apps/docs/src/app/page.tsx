"use client";
import { Text,View } from "react-native";
import {Button,ButtonText,ButtonSpinner} from "../../components/Button";
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white w-full h-full">
      <Text className="text-red-500 text-2xl font-bold">Hello World</Text>
      <Button size="lg" variant="outline"  className="bg-red-500">
        <ButtonText>Click me</ButtonText>
        <ButtonSpinner />
      </Button>
    </View>
  );
}
