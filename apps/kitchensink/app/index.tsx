import { View, Text, TouchableOpacity } from "react-native";
import componentList from "../components-list.json";
import { router } from "expo-router";
export default function Home() {
  return (
    <View>
      {componentList.map((component) => (
        <TouchableOpacity onPress={() => router.push(`./examples/box`)}>
          <Text>{component.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
