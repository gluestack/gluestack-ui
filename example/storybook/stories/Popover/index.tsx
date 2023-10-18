import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import {
  OverlayContainer,
  OverlayProvider,
  useOverlayPosition,
} from "@react-native-aria/overlays";

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

const PopoverContent = ({ targetRef }) => {
  let overlayRef = React.useRef(null);
  const { overlayProps } = useOverlayPosition({
    placement: "top",
    targetRef,
    overlayRef,
  });

  return (
    <View
      ref={overlayRef}
      style={{
        position: "absolute",
        ...overlayProps.style,
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
          <Text>Popover Title </Text>
        </View>
        <View style={{ maxWidth: 200, padding: 10 }}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
  );
};

export function PopoverExample(props: any) {
  const [visible, setVisible] = React.useState(false);

  let ref = React.useRef(null);

  return (
    <View style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Pressable
        ref={ref}
        role="button"
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
      {visible && (
        <OverlayContainer>
          <CloseButton onClose={() => setVisible(false)}></CloseButton>
          <PopoverContent targetRef={ref} />
        </OverlayContainer>
      )}
    </View>
  );
}
