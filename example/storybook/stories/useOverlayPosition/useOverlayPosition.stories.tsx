import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Trigger } from "./useOverlayPosition";
import { Wrapper } from "../Wrapper";

const Example = () => {
  return (
    <Wrapper>
      <Trigger />
    </Wrapper>
  );
};

storiesOf("useOverlayPosition", module).add("useOverlayPosition", Example);
