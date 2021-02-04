import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ControlledSwitch } from "./index";

export const Example = () => {
  return <ControlledSwitch />;
};

storiesOf("Switch", module).add("Switch", Example);
