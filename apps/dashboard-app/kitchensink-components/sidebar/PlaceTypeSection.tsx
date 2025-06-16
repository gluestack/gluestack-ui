import React, { useContext } from "react";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Heading,
  VStack,
  CheckIcon,
} from "../../components/ui";
import { ThemeContext } from "@/App";

const PlaceTypeSection = () => {
  const sidebarFiltersPlaceType = [
    {
      label: "Entire place",
      value: "entirePlace",
    },
    {
      label: "Private room",
      value: "privateRoom",
    },
    {
      label: "Shared room",
      value: "sharedRoom",
    },
  ];
  const { colorMode } = useContext(ThemeContext);
  const [values, setValues] = React.useState(["entirePlace"]);

  return (
    <VStack space="sm" className="px-2">
      <Heading size="sm">Type of place</Heading>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="place-type"
      >
        {sidebarFiltersPlaceType.map((placeType: any) => {
          return (
            <Checkbox
              value={placeType.value}
              size="sm"
              key={placeType.value}
              accessibilityLabel={placeType.value}
              className="my-2 justify-start"
            >
              <CheckboxIndicator>
                <CheckboxIcon
                  as={CheckIcon}
                  color={colorMode === "light" ? "#FEFEFF" : "#171717"}
                />
              </CheckboxIndicator>
              <CheckboxLabel>{placeType.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PlaceTypeSection;
