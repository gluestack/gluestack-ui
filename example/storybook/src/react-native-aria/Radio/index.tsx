import React from "react";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadio, useRadioGroup } from "@react-native-aria/radio";
import { Platform, Pressable, Text, View } from "react-native";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusRing } from "@react-native-aria/focus";

let RadioContext = React.createContext<any>({});

export function RadioGroup(props: any) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <View {...radioGroupProps}>
      <Text {...labelProps}>{label}</Text>
      <RadioContext.Provider
        value={{
          isDisabled: props.isDisabled,
          isReadOnly: props.isReadOnly,
          state,
        }}
      >
        {children}
      </RadioContext.Provider>
    </View>
  );
}

export function Radio(props: any) {
  let { state, isReadOnly, isDisabled } = React.useContext(RadioContext);
  const inputRef = React.useRef(null);
  let { inputProps } = useRadio(
    { isReadOnly, isDisabled, ...props },
    state,
    inputRef
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  let isSelected = state.selectedValue === props.value;
  const icon = isSelected ? "radiobox-marked" : "radiobox-blank";

  return (
    <>
      {Platform.OS === "web" ? (
        <label>
          <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={inputRef}></input>
          </VisuallyHidden>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={isFocusVisible ? { borderWidth: 1 } : {}}>
              <MaterialCommunityIcons size={30} color={"#000"} name={icon} />
            </View>
            <Text>{props.children}</Text>
          </View>
        </label>
      ) : (
        <Pressable {...inputProps} {...focusProps}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={isFocusVisible ? { borderWidth: 1 } : {}}>
              <MaterialCommunityIcons size={30} color={"#000"} name={icon} />
            </View>
            <Text>{props.children}</Text>
          </View>
          <Text>{isSelected ? "selected" : "not selected"}</Text>
        </Pressable>
      )}
    </>
  );
}
