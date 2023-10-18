import React from "react";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-native-aria/button";
import { useComboBoxState } from "@react-stately/combobox";
import { useComboBox } from "@react-native-aria/combobox";
import { useListBox, useOption } from "@react-native-aria/listbox";
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  findNodeHandle,
  Platform,
} from "react-native";

function contains(string, substring) {
  if (substring.length === 0) {
    return true;
  }

  if (string.toLowerCase().indexOf(substring.toLowerCase()) > -1) {
    return true;
  }

  return false;
}

export function ComboBox(props) {
  // Create state based on the incoming props and the filter function
  let state = useComboBoxState({ ...props, defaultFilter: contains });

  let triggerRef = React.useRef(null);
  let inputRef = React.useRef(null);
  let listBoxRef = React.useRef(null);
  let popoverRef = React.useRef(null);

  // Get props for child elements from useComboBox
  let {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef: triggerRef,
      listBoxRef,
      popoverRef,
      menuTrigger: "input",
    },
    state
  );

  // button props from useComboBox
  let { buttonProps } = useButton(triggerProps);

  return (
    <View>
      <Text {...labelProps}>{props.label}</Text>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            {...inputProps}
            ref={inputRef}
            style={{
              height: 22,
              width: "80%",
              marginRight: 0,
            }}
          />
          <Pressable
            {...buttonProps}
            ref={triggerRef}
            style={{
              height: 22,
              width: 10,
              marginLeft: 0,
            }}
          >
            <Text
              //@ts-ignore
              // Web only prop
              aria-hidden={true}
              style={{ padding: 2 }}
            >
              ▼
            </Text>
          </Pressable>
        </View>
        {state.isOpen && (
          <ListBoxPopup
            {...listBoxProps}
            // Use virtual focus to get aria-activedescendant tracking and
            // ensure focus doesn't leave the input field
            shouldUseVirtualFocus
            listBoxRef={listBoxRef}
            popoverRef={popoverRef}
            state={state}
          />
        )}
      </View>
    </View>
  );
}

function ListBoxPopup(props) {
  let {
    popoverRef,
    listBoxRef,
    state,
    shouldUseVirtualFocus,
    ...otherProps
  } = props;

  // Get props for the list box.
  // Prevent focus moving to list box via shouldUseVirtualFocus
  let { listBoxProps } = useListBox(
    {
      autoFocus: state.focusStrategy,
      disallowEmptySelection: true,
      shouldUseVirtualFocus,
      ...otherProps,
    },
    state,
    listBoxRef
  );

  // Add a hidden <DismissButton> component at the end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <View ref={popoverRef}>
      <ScrollView
        {...mergeProps(listBoxProps, otherProps)}
        ref={(node) => {
          if (Platform.OS === "web") {
            listBoxRef.current = findNodeHandle(node);
          } else {
            listBoxRef.current = node;
          }
        }}
        style={{
          position: "absolute",
          width: "100%",
          margin: 4,
          background: "lightgray",
          maxHeight: 100,
        }}
      >
        {[...state.collection].map((item) => (
          <Option
            shouldUseVirtualFocus
            key={item.key}
            item={item}
            state={state}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function Option({ item, state, shouldUseVirtualFocus }) {
  let ref = React.useRef();
  let isDisabled = state.disabledKeys.has(item.key);
  let isSelected = state.selectionManager.isSelected(item.key);
  // Track focus via focusedKey state instead of with focus event listeners
  // since focus never leaves the text input in a ComboBox
  let isFocused = state.selectionManager.focusedKey === item.key;

  // Get props for the option element.
  // Prevent options from receiving browser focus via shouldUseVirtualFocus.
  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
      shouldUseVirtualFocus,
    },
    state,
    ref
  );

  let backgroundColor;
  let color = "black";

  if (isSelected) {
    backgroundColor = "blueviolet";
    color = "white";
  } else if (isFocused) {
    backgroundColor = "gray";
  } else if (isDisabled) {
    backgroundColor = "transparent";
    color = "gray";
  }

  return (
    <Pressable
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: 5,
        outline: "none",
        cursor: "pointer",
      }}
    >
      <Text>{item.rendered}</Text>
    </Pressable>
  );
}
