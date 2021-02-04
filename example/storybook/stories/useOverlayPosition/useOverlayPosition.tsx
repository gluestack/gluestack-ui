import React from "react";
import { useOverlayPosition } from "@react-native-aria/overlays";
import { useButton } from "@react-native-aria/button";
import {
  Modal,
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useToggleState } from "@react-stately/toggle";

// Button to close overlay on outside click
function CloseButton(props) {
  return (
    <TouchableWithoutFeedback
      onPress={props.onClose}
      accessible={false}
      importantForAccessibility={"no-hide-descendants"}
    >
      <View style={StyleSheet.absoluteFill}></View>
    </TouchableWithoutFeedback>
  );
}

export function Trigger() {
  let ref = React.useRef();
  let overlayRef = React.useRef();
  const toggleState = useToggleState();

  const { overlayProps }: any = useOverlayPosition({
    placement: "bottom",
    targetRef: ref,
    overlayRef,
    isOpen: toggleState.isSelected,
    offset: 10,
  });

  let { buttonProps } = useButton({ onPress: toggleState.toggle }, ref);

  return (
    <View style={{ alignSelf: "center" }}>
      <Pressable
        {...buttonProps}
        ref={ref}
        accessibilityRole="button"
        accessibilityLabel="Click here to perform some actions"
      >
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text>Trigger</Text>
        </View>
      </Pressable>
      <Modal
        visible={toggleState.isSelected}
        onRequestClose={toggleState.toggle}
        transparent
      >
        <CloseButton onClose={toggleState.toggle} />

        <View
          style={{
            position: "absolute",
            ...overlayProps.style,
          }}
          ref={overlayRef}
        >
          <View
            style={{
              backgroundColor: "lightgray",
            }}
          >
            <Text>Hello world</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
