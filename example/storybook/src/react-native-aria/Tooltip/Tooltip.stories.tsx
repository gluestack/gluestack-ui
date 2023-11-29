import React from "react";
import { Platform } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { TooltipExample } from "./index";
import { Wrapper } from "../Wrapper";

export const Example = () => {
  if (Platform.OS === "web") {
    return (
      <Wrapper>
        <TooltipExample />
      </Wrapper>
    );
  }

  return null;
};

storiesOf("Tooltip", module).add("Tooltip", Example);
