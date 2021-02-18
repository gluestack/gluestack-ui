import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ControlledSwitch } from "./index";
import { Wrapper } from "../Wrapper";

export const Example = () => {
  return (
    <Wrapper>
      <ControlledSwitch />
    </Wrapper>
  );
};

storiesOf("Switch", module).add("Switch", Example);
