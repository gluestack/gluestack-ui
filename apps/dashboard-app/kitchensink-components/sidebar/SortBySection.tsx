import React, { useContext } from "react";
import {
  CircleIcon,
  Heading,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  VStack,
  RadioIcon,
} from "../../components/ui";
import { ThemeContext } from "@/App";

const SortBySection = () => {
  const sidebarFiltersCustomerRatings = [
    {
      label: "Top ratings",
      value: "Top ratings",
    },
    {
      label: "Best price",
      value: "Best price",
    },
    {
      label: "Discount",
      value: "Discount",
    },
    {
      label: "What’s new",
      value: "What’s new",
    },
  ];
  const { colorMode } = useContext(ThemeContext);
  const [values, setValues] = React.useState("Top ratings");

  return (
    <VStack space="sm" className="px-2">
      <Heading size="sm">Sort by</Heading>
      <RadioGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="sort-by filter"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              size="sm"
              key={placeType.value}
              className="justify-start my-2"
            >
              <RadioIndicator>
                <RadioIcon
                  as={CircleIcon}
                  color={colorMode === "light" ? "#292929" : "#FAFAFA"}
                />
              </RadioIndicator>
              <RadioLabel>{placeType.label}</RadioLabel>
            </Radio>
          );
        })}
      </RadioGroup>
    </VStack>
  );
};
export default SortBySection;
