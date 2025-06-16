import React, { useContext } from "react";
import {
  Checkbox,
  Slider,
  VStack,
  Heading,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  CheckboxIcon,
  CheckboxGroup,
  Tooltip,
  TooltipContent,
  TooltipText,
} from "../../components/ui";
import { ThemeContext } from "@/App";

const PriceRangeSection = ({ setScrollEnabled }: { setScrollEnabled: any }) => {
  const { colorMode } = useContext(ThemeContext);
  const [sliderValue, setSliderValue] = React.useState(3500);
  const [values, setValues] = React.useState(["entirePlace"]);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  const sidebarFiltersPriceRange = [
    {
      label: "below ₹2001",
      value: "below ₹2001",
    },
    {
      label: "₹2001 - ₹3000",
      value: "₹2001 - ₹3000",
    },
    {
      label: "₹3001 - ₹4001",
      value: "₹3001 - ₹4001",
    },
    {
      label: "above ₹3001",
      value: "above ₹3001",
    },
  ];

  return (
    <VStack space="md" className="px-2">
      <Heading size="sm">Price Range</Heading>
      <Slider
        minValue={800}
        maxValue={5000}
        size="sm"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
        className="w-full"
        onTouchStart={() => setScrollEnabled(false)}
        onTouchEnd={() => setScrollEnabled(true)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          pointerEvents={"none"}
          placement="bottom"
          trigger={(triggerProps: any) => {
            return <SliderThumb {...triggerProps} pointerEvents={"auto"} />;
          }}
        >
          <TooltipContent>
            <TooltipText className="text-typography-0">
              ₹{sliderValue}
            </TooltipText>
          </TooltipContent>
        </Tooltip>
      </Slider>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        accessibilityLabel="price filter"
        className="mt-3"
      >
        {sidebarFiltersPriceRange.map((priceRange: any) => {
          return (
            <Checkbox
              value={priceRange.value}
              size="sm"
              key={priceRange.value}
              accessibilityLabel={priceRange.value}
              className="my-2"
            >
              <CheckboxIndicator>
                <CheckboxIcon
                  as={CheckIcon}
                  color={colorMode === "light" ? "#FEFEFF" : "#171717"}
                />
              </CheckboxIndicator>
              <CheckboxLabel>{priceRange.label}</CheckboxLabel>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
export default PriceRangeSection;
