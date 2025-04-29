import { View, Text } from "react-native";

type BoxVariant = "primary" | "secondary" | "outline";
type BoxSize = "small" | "medium" | "large";

export default function Box({
  variant = "primary",
  size = "medium",
}: {
  variant?: BoxVariant;
  size?: BoxSize;
}) {
  // Define styles for variants
  const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    outline: "bg-transparent border border-gray-500 text-gray-800",
  };

  // Define styles for sizes
  const sizeStyles = {
    small: "p-2 text-sm",
    medium: "p-4 text-base",
    large: "p-6 text-lg",
  };

  return (
    <View className={`rounded-md ${variantStyles[variant]} ${sizeStyles[size]}`}>
      <Text className={variant === "outline" ? "text-gray-800" : "text-white"}>
        Box
      </Text>
    </View>
  );
}
