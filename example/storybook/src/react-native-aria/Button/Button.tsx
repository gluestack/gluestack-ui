import React from "react";
import { useHover } from "@react-native-aria/interactions";
import { useButton } from "@react-native-aria/button";
import { useFocusRing } from "@react-native-aria/focus";
import { OverlayContainer, OverlayProvider } from "@react-native-aria/overlays";
import { Pressable, Text, View } from "react-native";
import { useRef } from "react";

export function Button(props: any) {
  const ref = useRef(null);
  let { buttonProps, isPressed } = useButton(props);

  const { isHovered, hoverProps } = useHover({}, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <View>
      <Pressable
        ref={ref}
        {...buttonProps}
        {...hoverProps}
        {...focusProps}
        style={{
          backgroundColor: isPressed ? "rgb(9, 90, 186)" : "#e1e1e1",
          padding: 5,
        }}
      >
        <Text
          style={{
            color: isPressed ? "#f1f1f1" : "#000",
          }}
        >
          A simple button
        </Text>
      </Pressable>

      <View>
        <View>
          <Text>{isFocusVisible ? "focus visible" : "not focus visible"}</Text>
        </View>
        <View>
          <Text>{isHovered ? "Hovering" : "Not hovering"}</Text>
        </View>
      </View>
    </View>
  );
}
