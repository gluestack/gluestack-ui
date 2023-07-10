import React, { useEffect } from "react";
import {
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "../gluestack-ui-components";

const MobileBottomTabs = ({
  bottomTabs,
  activeTab,
  setActiveTab,
  modalVisible,
  setModalVisible,
  actionsheetVisible,
  setActionsheetVisible,
}: any) => {
  useEffect(() => {
    if (modalVisible === false) {
      setActiveTab("Home");
    }
    if (actionsheetVisible === false) {
      setActiveTab("Home");
    }
  }, [modalVisible]);
  return (
    <HStack
      alignContent="center"
      position="absolute"
      bottom={0}
      justifyContent="space-between"
      w="100%"
      py="$3"
      px="$6"
      sx={{
        "@md": { display: "none" },
      }}
    >
      {bottomTabs.map((tab: any) => {
        return (
          <Pressable
            key={tab.label}
            onPress={() => {
              setActiveTab(tab.label);
              if (tab.label === "Listing") {
                setModalVisible(true);
              }
              if (tab.label === "Filter") {
                setActionsheetVisible(true);
              }
            }}
            disabled={tab.disabled}
            opacity={tab.disabled ? 0.5 : 1}
          >
            <VStack alignItems="center">
              <Icon
                as={tab.icon}
                color={
                  activeTab === tab.label ? "$primary500" : "$textLight400"
                }
                size={20}
              />
              <Text
                size="xs"
                color={
                  activeTab === tab.label ? "$textLight900" : "$textLight400"
                }
                sx={{
                  _dark: {
                    color:
                      activeTab === tab.label
                        ? "$textDark100"
                        : "$textLight400",
                  },
                }}
              >
                {tab.label}
              </Text>
            </VStack>
          </Pressable>
        );
      })}
    </HStack>
  );
};

export default MobileBottomTabs;
