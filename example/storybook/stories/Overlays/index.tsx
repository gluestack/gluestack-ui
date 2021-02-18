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

const OverlayContent = ({ targetRef }) => {
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
      <Text>This content will be mounted in OverlayProvider</Text>
    </View>
  );
};

export function OverlayContainerExample(props: any) {
  const [visible, setVisible] = React.useState(false);

  let ref = React.useRef(null);

  return (
    <View style={{ marginLeft: "auto", marginRight: "auto" }}>
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
      {visible && (
        <OverlayContainer>
          <CloseButton onClose={() => setVisible(!visible)} />
          <OverlayContent targetRef={ref} />
        </OverlayContainer>
      )}
    </View>
  );
}
