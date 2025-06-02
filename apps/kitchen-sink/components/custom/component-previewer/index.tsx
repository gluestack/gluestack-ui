import React, { useState } from "react";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { Switch } from "@/components/ui/switch";
import { Box } from "@/components/ui/box";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import { Center } from "@/components/ui/center";
import { ChevronDownIcon } from "@/components/ui/icon";
type ComponentPreviewerProps = {
  children: (props: { [key: string]: any }) => React.ReactNode;
  props: {
    [key: string]: {
      control: {
        type: string;
      };
      options?: string[];
      defaultValue: string | boolean;
    };
  };
  title?: string;
};

export const ComponentPreviewer = ({
  children,
  props,
  title,
}: ComponentPreviewerProps) => {
  // Initialize state for each option dynamically
  const initialState = Object.keys(props).reduce((acc, key) => {
    acc[key] = props[key].defaultValue;
    return acc;
  }, {} as { [key: string]: string | boolean });

  const [selectedValues, setSelectedValues] = useState(initialState);

  const handleChange = (type: string, value: string | boolean) => {
    setSelectedValues((prev) => ({ ...prev, [type]: value }));
  };

  const renderControl = (key: string) => {
    const propConfig = props[key];

    if (propConfig.control.type === "boolean") {
      return (
        <Switch
          size="md"
          isDisabled={false}
          trackColor={{ false: "#d4d4d4", true: "#005db4" }}
          thumbColor={"#fafafa"}
          activeThumbColor={"#fafafa"}
          ios_backgroundColor={"#d4d4d4"}
          value={selectedValues[key]}
          onToggle={() => handleChange(key, !selectedValues[key])}
        />
      );
    }

    if (propConfig.control.type === "select" && propConfig.options) {
      return (
        <Select
          className="w-full"
          onValueChange={(value: string) => handleChange(key, value)}
        >
          <SelectTrigger
            variant="underlined"
            className="w-full justify-between items-center border-outline-200"
            size="md"
          >
            <SelectInput
              className="text-typography-900 text-lg font-medium placeholder:text-typography-900"
              placeholder={selectedValues[key]}
            />
            <SelectIcon
              size="xl"
              className="mr-3 text-typography-900"
              as={ChevronDownIcon}
            />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {propConfig.options.map((option) => (
                <SelectItem key={option} label={option} value={option} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>
      );
    }

    return null;
  };

  return (
    <Box className="p-5  rounded-lg m-3 mt-5 border border-outline-100 gap-5 w-full self-center">
      <Box className="border-b border-outline-100 pb-2">
        <Text className="text-typography-900 text-lg font-semibold pb-2">
          {title}
        </Text>
      </Box>
      <Box className="md:flex-row">
        {Object.keys(props).length > 0 && (
          <Box className="flex-1">
            {Object.keys(props).map((key) => (
              <Box
                key={key}
                className="flex-row mt-2 md:mt-4 md:flex-col flex-wrap justify-between md:items-start items-center"
              >
                <Text className="mb-2 font-medium text-typography-400">
                  {key}
                </Text>
                {renderControl(key)}
              </Box>
            ))}
          </Box>
        )}

        <Center className="min-h-[100px] flex-1 py-5 w-full">
          {children(selectedValues)}
        </Center>
      </Box>
    </Box>
  );
};

export default ComponentPreviewer;
