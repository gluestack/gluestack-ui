import { Text } from "react-native";
import { styled } from "@gluestack/styled";

export default styled(
  Text,
  {
    baseStyle: { style: { color: "$primary.100" } },
  },
  { ancestorStyle: ["_text"] }
);
