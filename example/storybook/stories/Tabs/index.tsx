import React, { MutableRefObject } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useTabsState } from "@react-stately/tabs";
import { useTabs, useTab } from "@react-native-aria/tabs";
import { SpectrumTabsProps } from "@react-types/tabs";
import { Orientation, DOMProps, Node } from "@react-types/shared";
import { SingleSelectListState } from "@react-stately/list";
import { View } from "react-native";


export function TabsExample(props: SpectrumTabsProps<any>) {
  let state = useTabsState(props);
  let tablistRef = React.useRef<HTMLDivElement>();
  let { tabListProps, tabPanelProps } = useTabs(props, state, tablistRef);

  return (
    <>
      <TabList
        {...tabListProps}
        ref={tablistRef}
        state={state}
        selectedTab={state.selectedKey}
      />
      <View {...tabPanelProps}>
        {state.selectedItem && state.selectedItem.props.children}
      </View>
    </>
  );
}

interface TabListProps<T> {
  isQuiet?: boolean;
  density?: "compact" | "regular";
  isDisabled?: boolean;
  orientation?: Orientation;
  state: SingleSelectListState<T>;
  selectedTab: HTMLElement;
  className?: string;
}

const TabList = React.forwardRef(function <T>(
  props: TabListProps<T>,
  ref: any
) {
  let {
    isQuiet,
    density,
    state,
    isDisabled,
    orientation,
    selectedTab,
    className,
    ...otherProps
  } = props;

  return (
    <View {...otherProps} ref={ref} style={styles(props).tabButtons}>
      {[...state.collection].map((item) => (
        <Tab
          key={item.key}
          item={item}
          state={state}
          isDisabled={isDisabled}
          orientation={orientation}
        />
      ))}
    </View>
  );
});

interface TabProps<T> extends DOMProps {
  item: Node<T>;
  state: SingleSelectListState<T>;
  isDisabled?: boolean;
  orientation?: Orientation;
}

export function Tab(props: TabProps<any>) {
  let { item, state, isDisabled: propsDisabled } = props;
  let { key, rendered } = item;
  let isDisabled = propsDisabled || state.disabledKeys.has(key);
  let ref = React.useRef<HTMLDivElement>();
  let { tabProps } = useTab({ item, isDisabled }, state, ref);
  let isSelected = state.selectedKey === key;
  const style = styles({ ...props, isSelected }).tab;
  const textStyle = styles({ ...props, isSelected }).tabText;


  return (
    <Pressable {...tabProps} ref={ref} style={style}>
      {typeof rendered === "string" ? <Text style={textStyle}>{rendered}</Text> : rendered}
    </Pressable>
  );
}

const styles = (props: any) => {
  return StyleSheet.create({
    tab: {
      marginLeft: 10,
    },
    tabText: {
      color: props.isSelected ? "#1E40AF" : "#1F2937",
      borderBottomColor: "#1E40AF",
      borderBottomWidth: props.isSelected ? 2 : 0,
      padding: 10,
    },
    tabButtons: {
      flexDirection: props.orientation === "vertical" ? "column" : "row",
    },
  });
};
