import React from "react";
import { useMenuTriggerState } from "@react-stately/menu";
import { useTreeState } from "@react-stately/tree";
import { mergeProps } from "@react-aria/utils";
import {
  OverlayContainer,
  useOverlayPosition,
  useOverlay,
} from "@react-native-aria/overlays";
import { useMenu, useMenuItem, useMenuTrigger } from "@react-native-aria/menu";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { FocusScope } from "@react-native-aria/focus";

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
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  // Get props for the button based on the trigger props from useMenuTrigger
  return (
    <View style={{ alignSelf: "center" }}>
      <Pressable
        {...menuTriggerProps}
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
      {state.isOpen && (
        <OverlayContainer>
          <FocusScope restoreFocus>
            <CloseButton onClose={state.close}></CloseButton>
            <MenuPopup
              {...props}
              isOpen={state.isOpen}
              accessibilityLabel={props.label}
              domProps={menuProps}
              autoFocus={state.focusStrategy}
              onClose={state.close}
              targetRef={ref}
            />
          </FocusScope>
        </OverlayContainer>
      )}
    </View>
  );
}

function MenuPopup(props) {
  // Create menu state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let overlayRef = React.useRef();
  let { menuProps } = useMenu(props, state, overlayRef);

  const { overlayProps: overlapPropsFromUseOverlay } = useOverlay(
    props,
    overlayRef
  );

  const { overlayProps }: any = useOverlayPosition({
    placement: "bottom",
    targetRef: props.targetRef,
    overlayRef,
    offset: 10,
  });

  return (
    <View
      style={{
        position: "absolute",
        ...overlayProps.style,
      }}
      ref={overlayRef}
      {...mergeProps(menuProps, props.domProps, overlapPropsFromUseOverlay)}
    >
      <View>
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
