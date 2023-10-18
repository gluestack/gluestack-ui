import React from "react";
import {
  OverlayContainer,
  useOverlayPosition,
} from "@react-native-aria/overlays";
import { useButton } from "@react-native-aria/button";
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  StyleSheet,
  findNodeHandle,
  ScrollView,
  Platform,
  SafeAreaView,
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

const positions = [
  "top",
  "left",
  "right",
  "bottom",
  "top left",
  "top right",
  "left top",
  "left bottom",
  "bottom right, bottom left",
  "right top",
  "right bottom",
];

export function TriggerWrapper() {
  const [placement, setPlacement] = React.useState<any>(-1);
  React.useEffect(() => {
    const id = setInterval(() => {
      setPlacement((prev) => (prev + 1) % positions.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return <Trigger placement={positions[placement]}></Trigger>;
}

const OverlayView = ({ targetRef, placement }) => {
  let overlayRef = React.useRef();

  const { overlayProps } = useOverlayPosition({
    placement: "top",
    targetRef,
    overlayRef,
    offset: 10,
  });

  return (
    <ScrollView
      bounces={false}
      style={{
        position: "absolute",
        height: 400,
        backgroundColor: "lightgray",
        ...overlayProps.style,
      }}
      ref={(node) => {
        if (Platform.OS === "web") {
          overlayRef.current = findNodeHandle(node);
        } else {
          overlayRef.current = node;
        }
      }}
    >
      <View
        style={{
          padding: 20,
          height: 5000,
        }}
      >
        <Text>Hello world</Text>
      </View>
    </ScrollView>
  );
};

export default function Trigger({ placement }: any) {
  let ref = React.useRef();
  const toggleState = useToggleState();

  let { buttonProps } = useButton({ onPress: toggleState.toggle }, ref);

  return (
    <View
      style={{
        height: 400,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        {...buttonProps}
        ref={ref}
        role="button"
        aria-label="Click here to perform some actions"
      >
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <Text>Trigger</Text>
        </View>
      </Pressable>
      {toggleState.isSelected && (
        <OverlayContainer>
          <CloseButton onClose={toggleState.toggle} />
          <OverlayView targetRef={ref} placement={placement} />
        </OverlayContainer>
      )}
    </View>
  );
}
