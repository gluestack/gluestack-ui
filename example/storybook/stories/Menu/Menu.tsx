import React from "react";
import { useMenuTriggerState } from "@react-stately/menu";
import { useTreeState } from "@react-stately/tree";
import { mergeProps } from "@react-aria/utils";
import { useOverlayPosition } from "@react-native-aria/overlays";
import { useMenu, useMenuItem, useMenuTrigger } from "@react-native-aria/menu";
import { useButton } from "@react-native-aria/button";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

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

export function MenuButton(props) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the menu trigger and menu elements
  let ref = React.useRef();
  let overlayRef = React.useRef();
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  const { overlayProps }: any = useOverlayPosition({
    placement: "bottom start",
    targetRef: ref,
    overlayRef,
    isOpen: state.isOpen,
    offset: 10,
  });

  // Get props for the button based on the trigger props from useMenuTrigger
  let { buttonProps } = useButton(menuTriggerProps, ref);

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
            justifyContent: "space-around",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text>{props.label}</Text>
          <Text aria-hidden="true" style={{ paddingLeft: 5 }}>
            ▼
          </Text>
        </View>
      </Pressable>
      <Modal visible={state.isOpen} onRequestClose={state.close} transparent>
        <CloseButton onClose={state.close}></CloseButton>
        <View
          style={{
            position: "absolute",
            ...overlayProps.style,
          }}
          ref={overlayRef}
        >
          <MenuPopup
            {...props}
            accessibilityLabel={props.label}
            domProps={menuProps}
            autoFocus={state.focusStrategy}
            onClose={state.close}
          />
        </View>
      </Modal>
    </View>
  );
}

function MenuPopup(props) {
  // Create menu state based on the incoming props
  let state = useTreeState({ ...props, selectionMode: "multiple" });

  // Get props for the menu element
  let ref = React.useRef();
  let { menuProps } = useMenu(props, state, ref);

  return (
    <View {...mergeProps(menuProps, props.domProps)} ref={ref}>
      <View
        style={{
          backgroundColor: "lightgray",
        }}
      >
        {[...state.collection].map((item) => (
          <MenuItem
            key={item.key}
            item={item}
            state={state}
            onAction={props.onAction}
            onClose={props.onClose}
          />
        ))}
      </View>
    </View>
  );
}

export function MenuItem({ item, state, onAction, onClose }) {
  // Get props for the menu item element
  let ref = React.useRef();
  let { menuItemProps }: any = useMenuItem(
    {
      key: item.key,
      isDisabled: item.isDisabled,
      onAction,
      onClose,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item

  return (
    <Pressable {...mergeProps(menuItemProps)} ref={ref}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text>{item.rendered}</Text>
      </View>
    </Pressable>
  );
}
