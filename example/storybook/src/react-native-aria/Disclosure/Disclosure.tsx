import React from "react";
import { useToggleState } from "@react-stately/toggle";
import {
  useDisclosureButton,
  useDisclosure,
} from "@react-native-aria/disclosure";
import { Pressable, Text, View } from "react-native";

type Props = {
  isOpen?: boolean;
  onChange?: (val: boolean) => void;
  onToggle?: () => void;
  defaultOpen?: boolean;
  isDisabled?: boolean;
};

export const Disclosure = (props: Props) => {
  const state = useToggleState({
    isSelected: props.isOpen,
    isDisabled: props.isDisabled,
    onChange: (val) => {
      props.onChange && props.onChange(val);
      props.onToggle && props.onToggle();
    },
  });

  const { buttonProps } = useDisclosureButton({}, state);
  const { disclosureProps } = useDisclosure({}, state);

  return (
    <View>
      <Pressable {...buttonProps}>
        <Text>Press me to toggle below content</Text>
      </Pressable>
      {state.isSelected && (
        <View {...disclosureProps}>
          <Text>Hello. My name is disclosed</Text>
        </View>
      )}
    </View>
  );
};
