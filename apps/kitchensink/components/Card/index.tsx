import { View, Text } from "react-native";

export default function Card({
  variant,
  size,
}: {
  variant: string;
  size: string;
}) {
  return (
    <View className={`${variant} ${size}`}>
      <Text>
        This is a card component
      </Text>
    </View>
  );
}
