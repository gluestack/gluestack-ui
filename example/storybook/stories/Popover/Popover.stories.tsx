import React from "react";
import { storiesOf } from "@storybook/react-native";
import { PopoverExample } from "./index";

export const Example = () => {
  return <PopoverExample />;
};

storiesOf("Popover", module).add("Popover", Example);
