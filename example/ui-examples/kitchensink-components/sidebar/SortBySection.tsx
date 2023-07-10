import React from "react";
import {
  CircleIcon,
  Heading,
  Radio,
  VStack,
} from "../../gluestack-ui-components";

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
  const [values, setValues] = React.useState("Top ratings");

  return (
    <VStack space="sm">
      <Heading size="sm">Sort by</Heading>
      <Radio.Group
        value={values}
        onChange={setValues}
        accessibilityLabel="sort-by filter"
      >
        {sidebarFiltersCustomerRatings.map((placeType: any) => {
          return (
            <Radio
              value={placeType.value}
              justifyContent="flex-start"
              size="sm"
              my="$2"
              key={placeType.value}
            >
              <Radio.Indicator>
                <Radio.Icon as={CircleIcon} />
              </Radio.Indicator>
              <Radio.Label ml="$2">{placeType.label}</Radio.Label>
            </Radio>
          );
        })}
      </Radio.Group>
    </VStack>
  );
};
export default SortBySection;
