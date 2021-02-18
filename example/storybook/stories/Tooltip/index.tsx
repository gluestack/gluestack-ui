import React from "react";
import { View, Pressable, Text } from "react-native";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { mergeProps } from "@react-aria/utils";
import { useTooltip, useTooltipTrigger } from "@react-native-aria/tooltip";

function Tooltip({ state, ...props }) {
  let { tooltipProps } = useTooltip(props, state);

  return (
    <View
      style={{
        position: "absolute",
        top: "100%",
        marginTop: 10,
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
      }}
      {...mergeProps(props, tooltipProps)}
    >
      <Text>{props.children}</Text>
    </View>
  );
}

export function TooltipExample(props) {
  let state = useTooltipTriggerState(props);
  let ref = React.useRef();

  // Get props for the trigger and its tooltip
  let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <View style={{ position: "relative" }}>
      <Pressable
        style={{ maxWidth: 120, padding: 10, marginLeft: 20, borderWidth: 1 }}
        ref={ref}
        {...triggerProps}
      >
        <Text>I have a tooltip</Text>
      </Pressable>
      {state.isOpen && (
        <Tooltip state={state} {...tooltipProps}>
          And the tooltip tells you more information.
        </Tooltip>
      )}
    </View>
  );
}
