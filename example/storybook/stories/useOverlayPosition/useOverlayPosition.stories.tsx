import React from "react";
import { storiesOf } from "@storybook/react-native";
import { TriggerWrapper } from "./useOverlayPosition";
import { Wrapper } from "../Wrapper";

const Example = () => {
  return (
    <Wrapper>
      <TriggerWrapper />
    </Wrapper>
  );
};

storiesOf("useOverlayPosition", module).add("useOverlayPosition", Example);
