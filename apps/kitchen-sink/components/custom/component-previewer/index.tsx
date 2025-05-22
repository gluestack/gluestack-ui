import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
};

export const ComponentPreviewer = ({ children, props }: ComponentPreviewerProps) => {
  // Initialize state for each option dynamically
  const initialState = Object.keys(props).reduce(
    (acc, key) => {
      acc[key] = props[key].defaultValue;
      return acc;
    },
    {} as { [key: string]: string | boolean },
  );

  const [selectedValues, setSelectedValues] = useState(initialState);

  const handleChange = (type: string, value: string | boolean) => {
    setSelectedValues((prev) => ({ ...prev, [type]: value }));
  };

  const renderControl = (key: string) => {
    const propConfig = props[key];
    
    if (propConfig.control.type === "boolean") {
      return (
        <View className="flex-row items-center space-x-4">
          <TouchableOpacity
            onPress={() => handleChange(key, true)}
            className={`px-4 py-2 rounded border ${
              selectedValues[key] === true 
                ? 'bg-primary-500 border-primary-500' 
                : 'bg-white border-gray-300'
            }`}
          >
            <Text className={selectedValues[key] === true ? 'text-white' : 'text-black'}>
              True
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => handleChange(key, false)}
            className={`px-4 py-2 rounded border ${
              selectedValues[key] === false 
                ? 'bg-primary-500 border-primary-500' 
                : 'bg-white border-gray-300'
            }`}
          >
            <Text className={selectedValues[key] === false ? 'text-white' : 'text-black'}>
              False
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    if (propConfig.control.type === "select" && propConfig.options) {
      return (
        <View className="border p-2 rounded">
          {propConfig.options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleChange(key, option)}
              className={`p-2 ${selectedValues[key] === option ? 'bg-primary-500' : ''}`}
            >
              <Text className={selectedValues[key] === option ? 'text-white' : 'text-black'}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    
    return null;
  };

  return (
    <View className="p-4">
      <Text className="text-lg font-semibold">Component Preview</Text>

      {/* Loop through the props dynamically and render controls */}
      {Object.keys(props).map((key) => (
        <View key={key} className="mt-4">
          <Text className="mb-2 font-medium">
            {key}: {String(selectedValues[key])}
          </Text>
          {renderControl(key)}
        </View>
      ))}

      {/* Preview section */}
      <View className="mt-8 border-t pt-4">
        <Text className="text-lg font-semibold mb-4">Preview</Text>
        <View className="flex items-center justify-center">
          {children(selectedValues)}
        </View>
      </View>
    </View>
  );
};

export default ComponentPreviewer;