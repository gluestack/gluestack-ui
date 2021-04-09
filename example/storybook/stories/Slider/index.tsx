import React from "react";
import { View, Text, Pressable, Platform } from "react-native";
import { useSlider, useSliderThumb } from "@react-native-aria/slider";
import { useSliderState } from "@react-stately/slider";
import { useFocusRing } from "@react-native-aria/focus";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { mergeProps } from "@react-aria/utils";

const useLayout = () => {
  const [layout, setLayout] = React.useState({});
  return {
    onLayout: (e) => {
      setLayout(e.nativeEvent.layout);
    },
    layout,
  };
};

export function Slider(props) {
  let trackRef = React.useRef(null);
  const { onLayout, layout } = useLayout();
  let state = useSliderState({
    ...props,
    numberFormatter: { format: (e) => e },
  });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    layout
  );

  return (
    <View
      {...groupProps}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        touchAction: "none",
      }}
    >
      {/* Create a flex container for the label and output element. */}
      <View style={{ display: "flex", alignSelf: "stretch" }}>
        {props.label && (
          <Text accessibilityRole="label" {...labelProps}>
            {props.label}
          </Text>
        )}
        {Platform.OS === "web" && (
          <output
            {...outputProps}
            style={{ flex: "1 0 auto", textAlign: "end" }}
          >
            {state.getThumbValueLabel(0)}
          </output>
        )}
      </View>
      {/* The track element holds the visible track line and the thumb. */}
      <Pressable
        onLayout={onLayout}
        {...trackProps}
        ref={trackRef}
        style={{
          position: "relative",
          height: 30,
          width: " 100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "gray",
            height: 3,
            top: 13,
            width: "100%",
          }}
        />
        <Thumb index={0} state={state} trackRef={trackRef} />
      </Pressable>
    </View>
  );
}

function Thumb(props) {
  let { state, trackRef, index } = props;
  let inputRef = React.useRef(null);
  const { onLayout, layout } = useLayout();
  let { thumbProps, inputProps } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state
  );

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <View
      style={{
        position: "absolute",
        top: 4,
        transform: [{ translateX: layout.width ? -layout.width / 2 : 0 }],
        left: `${state.getThumbPercent(index) * 100}%`,
      }}
    >
      <Pressable
        {...thumbProps}
        focusable={false}
        onLayout={onLayout}
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: isFocusVisible
            ? "orange"
            : state.isThumbDragging(index)
            ? "dimgrey"
            : "gray",
        }}
      >
        {Platform.OS === "web" && (
          <VisuallyHidden>
            <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
          </VisuallyHidden>
        )}
      </Pressable>
    </View>
  );
}
