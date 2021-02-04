import React from "react";
import { useHover } from "@react-native-aria/interactions";
import { useToggleButton } from "@react-native-aria/button";
import { useFocusRing } from "@react-native-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { Pressable, Text, View } from "react-native";
import { useRef } from "react";

export function ToggleButton(props: any) {
  const ref = useRef(null);
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(props, state, ref);

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
          backgroundColor: state.isSelected ? "rgb(9, 90, 186)" : "#e1e1e1",
          padding: 5,
        }}
      >
        <Text
          style={{
            color: state.isSelected ? "#f1f1f1" : "#000",
          }}
        >
          A simple toggle button
        </Text>
      </Pressable>

      <View>
        <View>
          <Text>{isFocusVisible ? "focus visible" : "not focus visible"}</Text>
        </View>
        <View>
          <Text>{isHovered ? "Hovering" : "Not hovering"}</Text>
        </View>
        <View>
          <Text>{state.isSelected ? "Selected" : "Not Selected"}</Text>
        </View>
      </View>
    </View>
  );
}
