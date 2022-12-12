import React from "react";
import { UIContext } from "../UIProvider";
import { useHover } from "@react-native-aria/interactions";
import type { InputProps } from "./types";

export function Input({
  children,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  isFullWidth,
  onKeyPress,
  type = "text",
  ...props
}: InputProps) {
  const { StyledInput } = React.useContext(UIContext);

  const _ref = React.useRef();
  const { isHovered } = useHover({}, _ref);
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  return (
    <StyledInput
      states={{
        hover: isHovered,
        focus: isFocused,
        disabled: isDisabled,
        invalid: isInvalid,
        readonly: isReadOnly,
      }}
      secureTextEntry={type === "password"}
      accessible
      editable={isDisabled || isReadOnly ? false : true}
      onKeyPress={(e: any) => {
        e.persist();
        onKeyPress && onKeyPress(e);
      }}
      onFocus={(e: any) => {
        handleFocus(true, props?.onFocus ? () => props?.onFocus(e) : () => {});
      }}
      onBlur={(e: any) => {
        handleFocus(false, props?.onBlur ? () => props?.onBlur(e) : () => {});
      }}
      {...props}
      ref={_ref}
    >
      {children}
    </StyledInput>
  );
}
