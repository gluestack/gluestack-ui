import React from "react";
import { useListBox, useOption } from "@react-native-aria/listbox";
import { useListState } from "@react-stately/list";
import { SpectrumListBoxProps } from "@react-types/listbox";
import { useFocusRing } from "@react-native-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { Pressable, Text, View } from "react-native";

type IListBoxProps = SpectrumListBoxProps<any> & {
  children: any;
  label?: string;
};

export function ListBox(props: IListBoxProps) {
  // Create state based on the incoming props
  let state = useListState(props);

  // Get props for the listbox element
  let ref = React.useRef();
  let { listBoxProps, labelProps } = useListBox(props, state, ref);

  return (
    <>
      <Text {...labelProps}>{props.label}</Text>
      <View
        {...listBoxProps}
        ref={ref}
        style={{
          padding: 0,
          margin: 5,
          borderWidth: 1,
          maxWidth: 250,
        }}
      >
        {[...state.collection].map((item) => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </View>
    </>
  );
}

function Option({ item, state }) {
  // Get props for the option element
  let ref = React.useRef();
  let isDisabled = state.disabledKeys.has(item.key);
  let isSelected = state.selectionManager.isSelected(item.key);
  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
    },
    state,
    ref
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Pressable
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        backgroundColor: isSelected ? "pink" : "transparent",
        color: isSelected ? "white" : null,
        padding: 5,
        outlineWidth: isFocusVisible ? 2 : 0,
        outlineStyle: "solid",
      }}
    >
      <Text>{item.rendered}</Text>
    </Pressable>
  );
}
