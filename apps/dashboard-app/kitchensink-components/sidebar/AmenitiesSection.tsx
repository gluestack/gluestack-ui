import React, { useContext } from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  HStack,
  Heading,
  Icon,
  Pressable,
  Text,
  VStack,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "../../components/ui";
import { ThemeContext } from "@/App";

const AmenitiesSection = () => {
  const sidebarFiltersAmmenities = [
    {
      label: "Wifi",
      value: "wifi",
    },
    {
      label: "Washing machine",
      value: "washing-machine",
    },
    {
      label: "Air conditioning",
      value: "air-conditioning",
    },
    {
      label: "Kitchen",
      value: "kitchen",
    },
    {
      label: "Dryer",
      value: "dryer",
    },
    {
      label: "Iron",
      value: "iron",
    },
    {
      label: "Hair Dryer",
      value: "hair-dryer",
    },
  ];
  const { colorMode } = useContext(ThemeContext);
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  const [viewAllComponents, setViewAllComponents] = React.useState(false);

  return (
    <VStack space="sm" className="px-2">
      <Heading size="sm">Ammenities</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="ammenities"
      >
        {sidebarFiltersAmmenities.map((ammenity: any, index: any) => {
          if (index > 4 && !viewAllComponents) return null;
          return (
            <Checkbox
              value={ammenity.value}
              size="sm"
              key={ammenity.value}
              accessibilityLabel={ammenity.value}
              className="justify-start my-2"
            >
              <CheckboxIndicator>
                <CheckboxIcon
                  as={CheckIcon}
                  color={colorMode === "light" ? "#FEFEFF" : "#171717"}
                />
              </CheckboxIndicator>
              <CheckboxLabel>{ammenity.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
      {viewAllComponents ? (
        <Pressable
          onPress={() => {
            setViewAllComponents(false);
          }}
        >
          <HStack className="justify-between">
            <Text size="sm" className="font-medium">
              Show less
            </Text>
            <Icon as={ChevronUpIcon} size="sm" />
          </HStack>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setViewAllComponents(true);
          }}
        >
          <HStack className="justify-between">
            <Text size="sm" className="font-medium">
              Show more
            </Text>
            <Icon as={ChevronDownIcon} size="sm" />
          </HStack>
        </Pressable>
      )}
    </VStack>
  );
};
export default AmenitiesSection;
