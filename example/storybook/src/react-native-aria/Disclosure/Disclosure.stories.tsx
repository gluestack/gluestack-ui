import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import { Disclosure } from "./index";
import { Wrapper } from "../Wrapper";

const DisclosureExample = () => {
  return <Disclosure />;
};

const Example = () => {
  return (
    <Wrapper>
      <View style={{ marginTop: 100 }}>
        <DisclosureExample />
      </View>
    </Wrapper>
  );
};

storiesOf("Disclosure", module).add("Disclosure", Example);
