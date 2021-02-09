import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { useOverlayPosition } from "@react-native-aria/overlays";

function CloseButton(props: any) {
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

export function PopoverExample(props: any) {
  const [visible, setVisible] = React.useState(false);

  let ref = React.useRef(null);
  let overlayRef = React.useRef(null);

  const { overlayProps } = useOverlayPosition({
    placement: "right top",
    targetRef: ref,
    overlayRef,
    isOpen: visible,
    offset: 5,
  });

  return (
    <View style={{ marginLeft: 20, marginTop: 300 }}>
      <Pressable
        ref={ref}
        accessibilityRole="button"
        onPress={() => setVisible(!visible)}
        style={{
          backgroundColor: "#F3F4F6",
          maxWidth: 100,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Press me</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        onRequestClose={() => setVisible(false)}
        animationType="fade"
      >
        <CloseButton onClose={() => setVisible(false)}></CloseButton>

        <View
          ref={overlayRef}
          style={{
            position: "absolute",
            ...overlayProps.style,
            backgroundColor: "000",
          }}
        >
          <View
            style={{
              shadowColor: "##D1D5DB",
              elevation: 4,
              borderWidth: 1,
              borderColor: "#D1D5DB",
            }}
          >
            <View style={{ padding: 10, backgroundColor: "#F3F4F6" }}>
              <Text>Popover Title</Text>
            </View>
            <View style={{ maxWidth: 200, padding: 10 }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Button onPress={() => {}} title="Yes"></Button>
              <Button onPress={() => {}} title="No"></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
