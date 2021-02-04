import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ToggleButton } from "./ToggleButton";

export const Example = () => {
  return <ToggleButton>Toggle button</ToggleButton>;
};

storiesOf("Button", module).add("Toggle Button", Example);
