import React from "react";
import { storiesOf } from "@storybook/react-native";
import { OverlayContainerExample } from "./index";
import { Wrapper } from "../Wrapper";

const MenuExample = () => {
  return (
    <Wrapper>
      <OverlayContainerExample />
    </Wrapper>
  );
};

storiesOf("Overlay", module).add("Overlay", MenuExample);
