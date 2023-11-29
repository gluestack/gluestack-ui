import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ToggleButton } from "./ToggleButton";
import { Wrapper } from "../Wrapper";

export const Example = () => {
  return (
    <Wrapper>
      <ToggleButton>Toggle button</ToggleButton>
    </Wrapper>
  );
};

storiesOf("Button", module).add("Toggle Button", Example);
